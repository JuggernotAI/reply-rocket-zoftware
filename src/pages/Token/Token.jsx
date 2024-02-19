import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/Loading-Screen/Loading-Screen";

const Token = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Loading.. | Juggernot.ai";
    const cookies = new Cookies();
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const access_token = params.get("access_token");
    const access_secret = params.get("access_secret");
    const username = params.get("username");
    const name = params.get("name");
    const profile_pic = params.get("profile_pic");
    if (!access_token || !access_secret) {
      navigate("/");
      return;
    }
    cookies.set("access_token", access_token, { path: "/" });
    cookies.set("access_secret", access_secret, { path: "/" });
    cookies.set("username", username, { path: "/" });
    cookies.set("name", name, { path: "/" });
    cookies.set("profile_pic", profile_pic, { path: "/" });
    console.log("Token: ", cookies.get("access_token"));
    console.log("Secret: ", cookies.get("access_secret"));
    navigate("/dashboard");
  }, []);

  return <LoadingScreen />;
};

export default Token;
