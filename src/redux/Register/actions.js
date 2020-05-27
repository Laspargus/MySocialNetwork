export const register = (email, username, password) => {
  return {
    type: "REGISTER",
    username,
    email,
    password,
  };
};
