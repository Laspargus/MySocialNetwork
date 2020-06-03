import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Message from "./../Message/Message";
import { addPostApi } from "./../../../Api/PostApi";
import { useDispatch } from "react-redux";
import { newPost } from "./../../../redux/Post/actions";
const CreatePost = ({ isAuthenticated }) => {
  const [content, SetContent] = useState("");
  const user_id = useSelector((state) => state.authentification.user_id);
  const token = useSelector((state) => state.authentification.token);
  const dispatch = useDispatch();

  const handleContent = (content) => {
    SetContent(content.target.value);
  };

  const handleClick = async () => {
    const post = await addPostApi(user_id, token, content);
    dispatch(newPost(post));
  };

  return (
    <>
      {isAuthenticated ? (
        <div className=" mt-5 p-5 row">
          <input
            className="col-md-6 mr-2"
            type="text"
            placeholder="your post"
            value={content}
            onChange={(event) => handleContent(event)}
          ></input>
          <button className="btn btn-info col-md-2" onClick={handleClick}>
            {" "}
            Add post{" "}
          </button>
        </div>
      ) : (
        <Link to="/login">Login to add post</Link>
      )}
    </>
  );
};

export default CreatePost;
