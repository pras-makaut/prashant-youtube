import React from "react";

const searchVideoCard = ({ video }) => {
  // const {title,description,}
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  return (
    <div className="my-3 p-2 flex h-72 shadow-lg rounded-lg mx-28">
      <img
        alt="videoThumbNail"
        className="rounded-lg"
        src={thumbnails.medium.url}
      />

      <ul className="mx-5">
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li>{publishedAt}</li>
      </ul>
    </div>
  );
};

export default searchVideoCard;
