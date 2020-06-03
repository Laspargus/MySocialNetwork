import React from "react";
import { useState, useEffect } from "react";

const EditPost = ({ post, handleEdit }) => {
  const [content, SetContent] = useState("");
  const handleClick = () => {
    console.log(post.id, content);
    handleEdit(post.id, content);
  };

  return (
    <>
      <input
        type="text"
        value={content}
        onChange={(event) => SetContent(event.target.value)}
      />
      <button className="btn btn-info" onClick={handleClick}>
        Save
      </button>
    </>
  );
};

export default EditPost;
