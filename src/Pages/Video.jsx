import React from "react";
import SideBar from "../Components/SideBar";
import PlayVideo from "../Components/PlayVideo";
import Recommended from "../Components/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="bg-[#f9f9f9] px-[2%] py-[1.25rem] flex justify-between flex-wrap ">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  );
};

export default Video;
