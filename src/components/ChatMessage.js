import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 p-1"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="user-icon"
      />
      <span className="px-2 text-lg font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
