import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "./../../redux/Register/actions";

const Register = () => {
  const dispatch = useDispatch();
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
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
      <button
        onClick={() => dispatch(register(username, email, password))}
        className="m-2 btn btn-primary"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
