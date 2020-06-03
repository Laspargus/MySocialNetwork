import React from "react";

const Message = ({ message }) => {
  return (
    <div className="alert alert-light" role="alert">
      {message}
    </div>
  );
};

export default Message;
