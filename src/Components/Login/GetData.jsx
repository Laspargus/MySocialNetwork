import React from "react";
const GetData = (event) => {
  const data = {
    username: "Miguel67",
    email: "michelmichel@yopmail.com",
    password: "test1234",
  };
  fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  return <></>;
};
export default GetData;
