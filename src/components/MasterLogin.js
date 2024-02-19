import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MasterLogin = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const history = useNavigate();

  const logMeIn = (event) => {
    event.preventDefault();

    axios.post("token", {
      email: loginForm.email,
      password: loginForm.password
    })
      .then((response) => {
        props.setToken(response.data.access_token);
        history.push('/twitter_login');
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    setLoginForm({
      email: "",
      password: ""
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setLoginForm(prevLoginForm => ({
      ...prevLoginForm,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="login">
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          value={loginForm.email}
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
        />
        <button onClick={logMeIn}>Submit</button>
      </form>
    </div>
  );
};

export default MasterLogin;
