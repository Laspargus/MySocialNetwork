import React from "react";

const LikePost = ({ toggleButton, incrementLike, decrementLike }) => {
  console.log("toggle dans mon like", toggleButton);
  return (
    <>
      {toggleButton ? (
        <button className="btn btn-primary" onClick={incrementLike}>
          like
        </button>
      ) : (
        <button className="btn btn-primary" onClick={decrementLike}>
          Dislike
        </button>
      )}
    </>
  );
};

export default LikePost;
