import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <div>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div
        className={`${
          sidebar ? "" : "pl-[7%]"
        } bg-[#f9f9f9] px-[1rem] md:pl-[17%] md:pr-[2%] py-[1.25rem] `}
      >
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
