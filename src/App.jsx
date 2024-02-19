import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Token from "./pages/Token/Token";
import Dashboard from "./pages/Dashboard/Dashboard";
import MasterLogin from './components/MasterLogin';
import Profile from './components/Profile';
import Header from './components/Header';
import useToken from './components/useToken';

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <Header token={removeToken} />
        {!token && token !== "" && token !== undefined ? (
          <MasterLogin setToken={setToken} />
        ) : (
          <>
            <Routes>
              <Route exact path="/profile" element={<Profile token={token} setToken={setToken} />} />
              <Route path="/twitter_login" element={<Login token={token} setToken={setToken} />} />
              <Route path="/save" element={<Token token={token} setToken={setToken} />} />
              <Route path="/dashboard" element={<Dashboard token={token} setToken={setToken} />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;