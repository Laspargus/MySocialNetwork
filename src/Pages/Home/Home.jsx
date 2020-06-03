import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/// Components
import PostPreview from "./../../Components/Post/PostPreview";
import CreatePost from "./../../Components/Post/CreatePost";
import ShortID from "shortid";

/// API Functions
import { getPostApi, deletePostApi, editPostApi } from "../../Api/PostApi";

/// Actions
import { loadPosts, deletePost, editPost } from "./../../redux/Post/actions";

const Home = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentification.isAuthenticated
  );

  const token = useSelector((state) => state.authentification.token);
  const list = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    displayPosts();
  }, [dispatch]);

  const displayPosts = async () => {
    SetLoading(true);
    const posts = await getPostApi();
    const cleanedPosts = posts.filter((post) => post.user != null);
    // Update my redux state
    dispatch(loadPosts(cleanedPosts));
    SetLoading(false);
  };

  const handleDelete = async (id) => {
    SetLoading(true);
    const post = await deletePostApi(id, token);
    //update my redux state
    dispatch(deletePost(post));
    SetLoading(false);
  };

  const handleEdit = async (id, content) => {
    console.log("t'es pas la ?");
    SetLoading(true);
    const post = await editPostApi(id, content, token);
    //update my redux state
    dispatch(editPost(post));
    SetLoading(false);
  };

  return (
    <>
      <CreatePost key={ShortID.generate()} isAuthenticated={isAuthenticated} />
      <div className="row mt-5">
        {!loading &&
          list.map((post) => (
            <PostPreview
              key={ShortID.generate()}
              post={post}
              isAuthenticated={isAuthenticated}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
