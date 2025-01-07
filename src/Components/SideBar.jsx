import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import SideBarList from "./Reuseable/SideBarList";

const SideBar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`${sidebar ? "" : "md:w-[5%]"} hidden inline-flex fixed top-0 pl-[2%] pt-[4rem] h-full w-[15%] bg-white `}>
      <div className="">
        <div className="">
          <SideBarList sidebar={sidebar} activeCategory={category === 0}  onClick={()=>setCategory(0)} image={home} text={"Home"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 20}  onClick={()=>setCategory(20)} image={game_icon} text={"Gaming"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 2}  onClick={()=>setCategory(2)} image={automobiles} text={"Automobiles"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 17}  onClick={()=>setCategory(17)} image={sports} text={"Sports"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 24}  onClick={()=>setCategory(24)} image={entertainment} text={"Entertainment"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 28}  onClick={()=>setCategory(28)} image={tech} text={"Technology"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 10}  onClick={()=>setCategory(10)} image={music} text={"Music"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 22}  onClick={()=>setCategory(22)} image={blogs} text={"Blogs"} />
          <SideBarList sidebar={sidebar} activeCategory={category === 25}  onClick={()=>setCategory(25)} image={news} text={"News"} />
          
        </div>
        <hr className={sidebar ?"border-0 h-[1px] bg-[#ccc] w-[85%]":"w-[50%] mb-[1.6rem]" }/>
        <div className="">
          <h3 className={sidebar ? "text-[.81rem] text-[#5a5a5a] my-[1.25rem]" : "hidden"}>Subscribed</h3>
          <div className="">
            <SideBarList otherStyles={"w-[1.6rem] rounded-[50%] mr-[1.25rem] "} sidebar={sidebar} image={"https://i.pinimg.com/236x/ee/4e/c7/ee4ec7a9201e64f6141bc4d71688c3a4.jpg"} text={"Pewdiepie"} />
            <SideBarList otherStyles={"w-[1.6rem] rounded-[50%] mr-[1.25rem] "} sidebar={sidebar} image={"https://i.pinimg.com/474x/f1/c0/d8/f1c0d80ce95af6c847ade9fa8ac87ef1.jpg"} text={"MrBeast"} />
            <SideBarList otherStyles={"w-[1.6rem] rounded-[50%] mr-[1.25rem] "} sidebar={sidebar} image={"https://i.pinimg.com/236x/26/4b/93/264b931e2892bf4cef86b2aafcab9c48.jpg"} text={"Justin Bieber"} />
            <SideBarList otherStyles={"w-[1.6rem] rounded-[50%] mr-[1.25rem] "} sidebar={sidebar} image={"https://i.pinimg.com/236x/b0/70/53/b07053318167e7b9edbc9a1b73eece73.jpg"} text={"5-minute crafts"} />
            <SideBarList otherStyles={"w-[1.6rem] rounded-[50%] mr-[1.25rem] "} sidebar={sidebar} image={"https://i.pinimg.com/236x/69/e2/58/69e2586140b43fd92c7b90a8ebe0e7e7.jpg"} text={"NAs Daily"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
