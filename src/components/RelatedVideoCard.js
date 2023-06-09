import React from "react";

const RelatedVideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="p-5 m-2 shadow-lg flex">
      <img
        className="rounded-lg h-24"
        alt="thumbnails"
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

export default RelatedVideoCard;
