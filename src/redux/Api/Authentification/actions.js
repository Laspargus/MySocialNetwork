export const fetchRegistrationRequest = () => {
  return {
    type: "FETCH_REGISTRATION_REQUEST",
  };
};

export const fetchRegistrationSuccess = (token) => {
  return {
    type: "FETCH_REGISTRATION_SUCCESS",
    token,
  };
};

export const fetchRegistrationFailure = (error) => {
  return {
    type: "FETCH_REGISTRATION_FAILURE",
    error,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export const fetchLoginRequest = () => {
  return {
    type: "FETCH_LOGIN_REQUEST",
  };
};

export const fetchLoginSuccess = (token) => {
  return {
    type: "FETCH_LOGIN_SUCCESS",
    token,
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: "FETCH_LOGIN_FAILURE",
    error,
  };
};
