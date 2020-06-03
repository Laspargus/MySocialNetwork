import React from "react";

const DeletePost = ({ post, handleDelete }) => {
  const handleClick = () => {
    handleDelete(post.id);
  };

  return (
    <button className="btn btn-danger" onClick={handleClick}>
      delete
    </button>
  );
};
export default DeletePost;
