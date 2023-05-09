import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videoDescription, setVideoDescription] = useState();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoID();
  }, []);
  const getVideoID = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id +
        "&key=AIzaSyA7T7eKIap7-YTehGHKxSODOTWvrkeW1ys"
    );
    const json = await data.json();
    console.log(json.items[0]);
    setVideoDescription(json.items[0]);
  };
  return (
    <div className="px-5 m-2">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div>
        <h1 className="py-2 font-bold text-2xl">
          {videoDescription?.snippet?.title}
        </h1>
      </div>
    </div>
  );
};

export default WatchPage;
