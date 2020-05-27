import {
  fetchRegistrationRequest,
  fetchRegistrationFailure,
  fetchRegistrationSuccess,
} from "./apiActions";
// const email = useSelector((state) => state.email);
// const password = useSelector((state) => state.password);
// const username = useSelector((state) => state.username);

const FetchApi = (email, username, password) => {
  const data = {
    username,
    email,
    password,
  };
  console.log(username, email, password);
  return (dispatch) => {
    // dispatch(fetchRegistrationRequest());
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
        // if (response.status === "error") {
        //   dispatch(fetchRegistrationFailure(response.message));
        // } else {
        //   dispatch(fetchRegistrationSuccess(response.articles));
        // }
      });
  };
};

export default FetchApi;
