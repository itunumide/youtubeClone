import React from "react";

const SideBarList = ({otherStyles="w-[1.25rem]", text, image ,sidebar}) => {
  return (
    <div  className=" flex-div mb-[6%] w-fit flex-wrap cursor-pointer ">
      <img src={image} alt={text} className={`${sidebar ? "" : "mb-[.9rem]"} ${otherStyles} mr-[1.25rem]  `} />
      <p className={sidebar ? "flex" : "hidden"}>{text}</p>
    </div>
  );
};

export default SideBarList;
