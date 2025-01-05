import React from "react";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";

const Home = ({ sidebar }) => {
  return (
    <div>
      <SideBar sidebar={sidebar} />
      <div className={`{sidebar ? "" : "w-[5%]"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
