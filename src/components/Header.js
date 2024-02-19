import { useEffect } from 'react';

import axios from 'axios';

export default function Header(props) {
  useEffect(() => {
    const logMeOut = async () => {
      try {
        const response = await axios.post('logout');
        props.token();
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };

    logMeOut();
  }, []);

  return (
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <button onClick={props.token}>Logout</button>
    </header>
  );
}

