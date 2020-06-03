const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    case "NEW_POST":
      return {
        ...state,
        posts: state.posts.concat(action.addedPost),
      };
    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.editedPost.id ? action.editedPost : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.deletedPost.id),
      };
    default:
      return state;
  }
};

export default postsReducer;
