import Cookies from "js-cookie";

const initialState = {
  loading: false,
  token: "",
  errorMessage: "",
  isAuthenticated: Cookies.get("user_token") ? true : false,
};

const authentificationReducer = (state = initialState, action) => {
  console.log("mon action", action);
  switch (action.type) {
    case "FETCH_REGISTRATION_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case "FETCH_REGISTRATION_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.token.jwt,
        errorMessage: "",
      };

    case "FETCH_REGISTRATION_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorMessage: action.error,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: "",
        errorMessage: "",
      };

    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.token.jwt,
        errorMessage: "",
      };

    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};

export default authentificationReducer;
