import { Link } from "react-router-dom";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";

const Feed = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-[1rem] gap-y-[2.95rem] mt-[.95rem] ">
      <Link to={`video/30/334`}>
        <img src={thumbnail1} alt="" className=" w-full rounded-[.4rem]  " />
        <h2 className="text-[1rem] text-[#000] mx-0 my-[.32rem] font-semibold ">uhhshubyuhdsb</h2>
        <h3 className="text-[.9rem] text-[#555] mx-0 my-[.375rem] font-semibold ">great stavck</h3>
        <p className="text-[.9rem] ">12230 2days ago</p>
      </Link>
      <div>
        <img src={thumbnail2} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail3} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail4} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail5} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail6} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail7} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail8} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail1} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail2} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail3} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail4} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail5} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail6} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail7} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
      <div>
        <img src={thumbnail8} alt="" className="" />
        <h2>uhhshubyuhdsb</h2>
        <h3>great stavck</h3>
        <p>12230 2days ago</p>
      </div>
    </div>
  );
};

export default Feed;
