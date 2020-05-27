import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const FetchApi = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const username = useSelector((state) => state.username);

  const data = {
    username: username,
    email: email,
    password: password,
  };
  return (dispatch) => {
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
};

export default FetchApi;
