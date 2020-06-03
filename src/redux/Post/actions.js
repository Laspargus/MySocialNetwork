export const loadPosts = (posts) => {
  return {
    type: "LOAD_POSTS",
    posts,
  };
};

export const newPost = (post) => {
  return {
    type: "NEW_POST",
    addedPost: post,
  };
};

export const editPost = (post) => {
  return {
    type: "EDIT_POST",
    editedPost: post,
  };
};

export const deletePost = (post) => {
  return {
    type: "DELETE_POST",
    deletedPost: post,
  };
};
