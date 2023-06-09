import React, { useContext, useEffect, useState } from "react";
import searchContext from "../utils/searchContext";
import { useParams, Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

const SeachVideo = () => {
  const { showSuggestion, setShowSuggestion } = useContext(searchContext);

  const { id } = useParams();

  const [searchVideoData, setSearchVideoData] = useState([]);
  //   console.log(id);

  useEffect(() => {
    setShowSuggestion(false);
    getSearchVideoData();
  }, []);

  const getSearchVideoData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        id +
        "&type=video&key=AIzaSyA7T7eKIap7-YTehGHKxSODOTWvrkeW1ys"
    );
    const json = await data.json();
    setSearchVideoData(json.items);
    // console.log(json.items);
  };

  return (
    <div>
      {searchVideoData.map((video) => (
        <Link key={video.id.videoId} to={"../../watch?v=" + video.id.videoId}>
          <SearchVideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SeachVideo;
