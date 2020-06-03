import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRegistrationRequest,
  fetchRegistrationSuccess,
} from "./../../redux/Authentification/actions";
import { fetchApiRegistration } from "./../../Api/AuthentificationApi";
import Cookies from "js-cookie";

const Register = () => {
  const dispatch = useDispatch();
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const isAuthenticated = useSelector(
    (state) => state.authentification.isAuthenticated
  );

  const handleClick = () => {
    loadRegistration(username, email, password);
  };

  const loadRegistration = async () => {
    dispatch(fetchRegistrationRequest());
    const registration = await fetchApiRegistration(username, email, password);
    console.log("registration", registration);
    dispatch(fetchRegistrationSuccess(registration));
    Cookies.set("user_id", registration.user_id);
    Cookies.set("user_token", registration.user.jwt);
  };

  return (
    <>
      {!isAuthenticated && (
        <div className="card p-5 mt-5 col-md-8 offset-2">
          <input
            type="text"
            className="m-2 form-control"
            placeholder="Username"
            value={username}
            onChange={(event) => SetUsername(event.target.value)}
          />
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
            Register
          </button>
        </div>
      )}
    </>
  );
};

export default Register;
