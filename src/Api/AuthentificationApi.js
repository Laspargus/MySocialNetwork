import Cookies from "js-cookie";

export const fetchApiLogin = async (identifier, password) => {
  const data = {
    identifier,
    password,
  };

  const response = await fetch(
    "https://api-minireseausocial.mathis-dyk.fr/auth/local",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .catch((error) => {
      alert("Mauvais email ou mot de passe");
    });

  const login = await response.json();
  return login;
};

export const fetchApiRegistration = async (username, email, password) => {
  const data = {
    username,
    email,
    password,
  };

  const response = await fetch(
    "https://api-minireseausocial.mathis-dyk.fr/auth/local/register",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const registration = await response.json();
  console.log("retour de lapi regostration", registration);
  return registration;
};
