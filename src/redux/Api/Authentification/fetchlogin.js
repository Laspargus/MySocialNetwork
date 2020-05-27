import Cookies from "js-cookie";

import {
  fetchLoginRequest,
  fetchLoginFailure,
  fetchLoginSuccess,
} from "./actions";

const FetchLogin = (email, password) => {
  const data = {
    email,
    password,
  };

  const token = Cookies.get("user_token");

  return (dispatch) => {
    dispatch(fetchLoginRequest());

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((response) => {
        //Cookies.set("user_token", response.jwt);
        //Cookies.set("user_id", response.user.id);
        dispatch(fetchLoginSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchLoginFailure(error.message));
      });
  };
};

export default FetchLogin;
