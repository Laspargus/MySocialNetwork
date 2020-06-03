import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  fetchLoginRequest,
  fetchLoginSuccess,
} from "./../../redux/Authentification/actions";
import { fetchApiLogin } from "./../../Api/AuthentificationApi";
import Cookies from "js-cookie";
const Login = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const isAuthenticated = useSelector(
    (state) => state.authentification.isAuthenticated
  );

  const handleClick = async () => {
    dispatch(fetchLoginRequest());
    const login = await fetchApiLogin(email, password);
    dispatch(fetchLoginSuccess(login));
    Cookies.set("user_id", login.user.user_id);
    Cookies.set("user_token", login.jwt);
  };

  return (
    <>
      {!isAuthenticated && (
        <div className="card p-5 mt-5 col-md-8 offset-2">
          <input
            type="text"
            className="m-2 form-control"
            value={email}
            placeholder="Email"
            onChange={(event) => SetEmail(event.target.value)}
          />
          <input
            type="password"
            className="m-2 form-control"
            placeholder="Password"
            value={password}
            onChange={(event) => SetPassword(event.target.value)}
          />
          <button onClick={handleClick} className="m-2 btn btn-primary">
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
