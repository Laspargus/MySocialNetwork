import React from "react";
import GetData from "./GetData";
const Login = () => {
  return (
    <div className="card p-5 mt-5 col-md-8 offset-2">
      <input type="text" className="m-2 form-control" placeholder="Username" />
      <input
        type="password"
        className="m-2 form-control"
        placeholder="Password"
      />
      <button
        onClick={(event) => GetData(event)}
        className="m-2 btn btn-primary"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
