import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-3 bg-gray-100 rounded-lg p-2">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="user-icon"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
