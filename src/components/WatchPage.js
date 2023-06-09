import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, Link } from "react-router-dom";
import CommentContiner from "./CommentContiner";
import RelatedVideoCard from "./RelatedVideoCard";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videoDescription, setVideoDescription] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoID();
    getRelatedVideo();
  }, []);
  const getVideoID = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id +
        "&key=AIzaSyA7T7eKIap7-YTehGHKxSODOTWvrkeW1ys"
    );
    const json = await data.json();
    setVideoDescription(json.items[0]);
  };
  const getRelatedVideo = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=" +
        id +
        "&maxResults=10&type=video&key=AIzaSyA7T7eKIap7-YTehGHKxSODOTWvrkeW1ys"
    );
    const json = await data.json();
    // console.log(json.items);
    setRelatedVideos(json.items);
  };
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full">
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
        <CommentContiner />
      </div>
      <div className="w-full px-2">
        {/* {relatedVideos.map((video) => (
          <Link key={video.id.videoId} to={"?v=" + video.id.videoId}>
            <RelatedVideoCard info={video} />
          </Link>
        ))} */}
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
