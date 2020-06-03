export const addPostApi = async (user, token, text) => {
  const data = {
    text,
    user,
  };
  const response = await fetch(
    `https://api-minireseausocial.mathis-dyk.fr/posts`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const post = await response.json();
  return post;
};

export const getPostApi = async () => {
  const response = await fetch(
    `https://api-minireseausocial.mathis-dyk.fr/posts?_limit=5&_sort=created_at:desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const posts = await response.json();
  return posts;
};

export const deletePostApi = async (id, token) => {
  const response = await fetch(
    `https://api-minireseausocial.mathis-dyk.fr/posts/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  const posts = await response.json();
  return posts;
};

export const editPostApi = async (id, content, token) => {
  const data = {
    text: content,
  };

  const response = await fetch(
    `https://api-minireseausocial.mathis-dyk.fr/posts/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const posts = await response.json();
  console.log("dans mon editPostApi", posts);
  return posts;
};

export const setLikeApi = async (id, like, token) => {
  const data = {
    like,
  };

  console.log("like dansd mon API", like);

  const response = await fetch(
    `https://api-minireseausocial.mathis-dyk.fr/posts/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const post = await response.json();
  return post;
};
