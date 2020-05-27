const initialState = {
  username: "",
  email: "",
  password: "",
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "STORE_USER_DATA":
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
};

export default userReducer;
