const initialState = {
  email: "",
  username: "",
  password: "",
};

const registerReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        email: action.email,
        username: action.username,
        password: action.password,
      };

    default:
      return state;
  }
};

export default registerReducer;
