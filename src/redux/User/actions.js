export const StoreUserData = (username, email, password) => {
  return {
    type: "STORE_USER_DATA",
    username,
    email,
    password,
  };
};
