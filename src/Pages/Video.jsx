import React from "react";
import PlayVideo from "../Components/PlayVideo";
import Recommended from "../Components/Recommended";
import { useParams } from "react-router-dom";

const Video = ({ searchTerm }) => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="bg-[#f9f9f9] px-[5%] md:px-[2%] py-[1.25rem] flex justify-between flex-wrap ">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} searchTerm={searchTerm} />
    </div>
  );
};

export default Video;
