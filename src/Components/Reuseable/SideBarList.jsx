import React from "react";

const SideBarList = ({otherStyles="w-[1.25rem]", text, image ,sidebar, onClick, activeCategory}) => {
  return (
    <div  className={`group flex-div mb-[6%] w-fit flex-wrap cursor-pointer `} onClick={onClick}>
      <img src={image} alt={text} className={`${sidebar ? "" : "mb-[.9rem]"} ${activeCategory ? " pb-[.125rem]  border-b-[3px] border-solid border-red-500 " : ""} ${otherStyles} group-hover:scale-125 mr-[1.25rem]  `} />
      <p className={sidebar ? "flex" : "hidden"}>{text}</p>
    </div>
  );
};

export default SideBarList;
