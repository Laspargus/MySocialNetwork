export const getApiProfile = async (id, token) => {
  const response = await fetch(
    `https://api-minireseausocial.mathis-dyk.fr/users/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );

  const profile = await response.json();
  return profile;
};
