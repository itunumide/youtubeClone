import menuIcon from "../assets/menu.png";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import uploadIcon from "../assets/upload.png";
import moreIcon from "../assets/more.png";
import notificationIcon from "../assets/notification.png";
import { Link } from "react-router-dom";

const NavBar = ({ setSidebar }) => {
  return (
    <nav className="flex-div justify-between px-[2%] shadow-custom sticky top-0 z-10 py-[rem] bg-[#fff] ">
      <section className="flex-div">
        <img
          className="hidden md:inline-flex md:w-[1.375rem] md:mr-[1.5625rem] "
          src={menuIcon}
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
          alt="menu icon"
        />
        <Link to={"/"}>
          <img className=" w-[7rem] md:w-[8.125rem] " src={logo} alt="logo" />
        </Link>
      </section>
      <section className="flex-div">
        <div className="flex-div w-[100%] border rounded-[1.6rem] py-[.2rem] md:py-[.5rem] px-[.75rem] ">
          <input
            className="w-[6.25rem] md:w-[25rem] border-none outline-none bg-transparent "
            type="text"
            placeholder="Search"
          />
          <img src={searchIcon} alt="search icon" className="w-[.9rem]  " />
        </div>
      </section>
      <section className="flex-div ">
        <img src={uploadIcon} alt="" className="hidden md:inline-flex md:w-[1.6rem] md:mr-[1.6rem] " />
        <img src={moreIcon} alt="" className="hidden md:inline-flex md:w-[1.6rem] md:mr-[1.6rem]" />
        <img src={notificationIcon} alt="" className="hidden md:inline-flex md:w-[1.6rem] md:mr-[1.6rem]" />
        <img
          src={
            "https://i.pinimg.com/736x/65/04/29/65042906985241278be17a79a7574652.jpg"
          }
          alt=""
          className="object-cover rounded-[50%] w-[2.2rem] mr-[1rem] md:mr-[1.6rem]"
        />
      </section>
    </nav>
  );
};

export default NavBar;
