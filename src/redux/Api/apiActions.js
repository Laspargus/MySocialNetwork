const fetchRegistrationRequest = () => {
  return {
    type: "FETCH_REGISTRATION_REQUEST",
  };
};

const fetchRegistrationSuccess = (token) => {
  return {
    type: "FETCH_REGISTRATION_SUCCESS",
    token,
  };
};

const fetchRegistrationFailure = (error) => {
  return {
    type: "FETCH_REGISTRATION_FAILURE",
    error,
  };
};
