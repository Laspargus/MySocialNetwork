import React from "react";
import { useDispatch } from "react-redux";
import { StoreUserData } from "./../../redux/User/actions";
import FetchLogin from "./../../redux/Api/Authentification/fetchlogin";
import { useState } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const [loginEmail, SetLoginEmail] = useState("");
  const [loginPassword, SetLoginPassword] = useState("");

  const handleClick = () => {
    dispatch(StoreUserData("", loginEmail, loginPassword));
    dispatch(FetchLogin(loginEmail, loginPassword));
  };

  return (
    <div className="card p-5 mt-5 col-md-8 offset-2">
      <input
        type="text"
        className="m-2 form-control"
        value={loginEmail}
        placeholder="Email"
        onChange={(event) => SetLoginEmail(event.target.value)}
      />
      <input
        type="password"
        className="m-2 form-control"
        placeholder="Password"
        value={loginPassword}
        onChange={(event) => SetLoginPassword(event.target.value)}
      />
      <button onClick={handleClick} className="m-2 btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
