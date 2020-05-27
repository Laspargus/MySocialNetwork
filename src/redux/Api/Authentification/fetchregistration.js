import {
  fetchRegistrationRequest,
  fetchRegistrationFailure,
  fetchRegistrationSuccess,
} from "./actions";
import Cookies from "js-cookie";

const FetchRegistration = (username, email, password) => {
  const data = {
    username,
    email,
    password,
  };

  return (dispatch) => {
    dispatch(fetchRegistrationRequest());

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
    console.log("ma data :", data);
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((response) => {
        Cookies.set("user_token", response.jwt);
        Cookies.set("user_id", response.user.id);
        dispatch(fetchRegistrationSuccess(response));
      })
      .catch((error) => {
        console.log("api error", error);
        dispatch(fetchRegistrationFailure(error.message));
      });
  };
};
export default FetchRegistration;
