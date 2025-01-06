import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import save from "../assets/save.png";
import share from "../assets/share.png";

const PlayVideo = () => {
  return (
    <div className="flex-[0_0_69%]">
      <video className="w-full" src={video1} controls autoPlay muted></video>
      <h3 className="mt-[1.9rem] mb-0 font-semibold text-[1.4rem] ">
        best youtube descriptimm
      </h3>
      <div className="flex-div justify-between flex-wrap mt-[.3rem] text-[.875rem] text-[#5a5a5a] ">
        <p>1667views ; 2days ago</p>
        <div>
          <span className="ml-[.95rem] inline-flex items-center">
            <img src={like} alt="" className=" w-[1.25rem] mr-[.5rem] " />
            125
          </span>
          <span className="ml-[.95rem] inline-flex items-center">
            <img src={dislike} alt="" className=" w-[1.25rem] mr-[.5rem] " />2
          </span>
          <span className="ml-[.95rem] inline-flex items-center">
            <img src={share} alt="" className=" w-[1.25rem] mr-[.5rem] " />
            share
          </span>
          <span className="ml-[.95rem] inline-flex items-center">
            <img src={save} alt="" className=" w-[1.25rem] mr-[.5rem] " />
            save
          </span>
        </div>
      </div>
      <hr className="h-[1px] bg-[#ccc] mx-0 my-[1rem] border-none " />
      <div className="mt-[1.25rem] flex-div ">
        <img
          src="https://i.pinimg.com/736x/65/04/29/65042906985241278be17a79a7574652.jpg"
          alt="profile"
          className="w-10 rounded-[50%] mr-[.94rem] "
        />
        <div className="flex-1 leading-[1.125rem] ">
          <p className="text-[#000] font-semibold text-[1.125rem] ">
            channel namw
          </p>
          <span className="text-[.8125rem] text-[#5a5a5a] ">
            1million subscribers
          </span>
        </div>
        <button className="bg-red-500 text-white px-[1.9rem] py-[.5rem] border-none outline-none rounded-md cursor-pointer ">
          subscribe
        </button>
      </div>
      <div className="pl-[3.45rem] mx-[0] mb-[.95rem] ">
        <p className="text-[#5a5a5a] text-[.813rem] mb-[.3125rem]  ">
          chsnnel mske lersaninng easy
        </p>
        <p className="text-[#5a5a5a] text-[.813rem] mb-[.3125rem] ">
          
          subscfsdg
        </p>
        <hr />
        <h4 className="text-[#5a5a5a] text-[.813rem] mt-[.94rem] ">
          130 comments
        </h4>
        <div className="flex-div mx-0 my-[1.25rem] ">
          <img
            src="https://i.pinimg.com/736x/65/04/29/65042906985241278be17a79a7574652.jpg"
            alt=""
            className="w-[2.125rem] rounded-[50%] mr-[.94rem]  "
          />
          <div className="">
            <h3 className="text-[.9rem] mb-[.125rem] ">
              username
              <span className="text-[.75rem] text-[5a5a5a] ml-[.5rem] font-medium ">
                1 day ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              error fuga. Possimus pariatur culpa, aut quis est odit hic. Velit
              tenetur quam doloremque, facere nemo eum pariatur laboriosam dolor
              nesciunt?
            </p>
            <div className="flex-div mx-o my-2 text-[.92rem] ">
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={like}
                alt=""
              />
              <span className="mr-[1.25rem] text-[5a5a5a] ">244</span>
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={dislike}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-div mx-0 my-[1.25rem] ">
          <img
            src="https://i.pinimg.com/736x/65/04/29/65042906985241278be17a79a7574652.jpg"
            alt=""
            className="w-[2.125rem] rounded-[50%] mr-[.94rem]  "
          />
          <div className="">
            <h3 className="text-[.9rem] mb-[.125rem] ">
              username
              <span className="text-[.75rem] text-[5a5a5a] ml-[.5rem] font-medium ">
                1 day ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              error fuga. Possimus pariatur culpa, aut quis est odit hic. Velit
              tenetur quam doloremque, facere nemo eum pariatur laboriosam dolor
              nesciunt?
            </p>
            <div className="flex-div mx-o my-2 text-[.92rem] ">
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={like}
                alt=""
              />
              <span className="mr-[1.25rem] text-[5a5a5a] ">244</span>
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={dislike}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-div mx-0 my-[1.25rem] ">
          <img
            src="https://i.pinimg.com/736x/65/04/29/65042906985241278be17a79a7574652.jpg"
            alt=""
            className="w-[2.125rem] rounded-[50%] mr-[.94rem]  "
          />
          <div className="">
            <h3 className="text-[.9rem] mb-[.125rem] ">
              username
              <span className="text-[.75rem] text-[5a5a5a] ml-[.5rem] font-medium ">
                1 day ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              error fuga. Possimus pariatur culpa, aut quis est odit hic. Velit
              tenetur quam doloremque, facere nemo eum pariatur laboriosam dolor
              nesciunt?
            </p>
            <div className="flex-div mx-o my-2 text-[.92rem] ">
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={like}
                alt=""
              />
              <span className="mr-[1.25rem] text-[5a5a5a] ">244</span>
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={dislike}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-div mx-0 my-[1.25rem] ">
          <img
            src="https://i.pinimg.com/736x/65/04/29/65042906985241278be17a79a7574652.jpg"
            alt=""
            className="w-[2.125rem] rounded-[50%] mr-[.94rem]  "
          />
          <div className="">
            <h3 className="text-[.9rem] mb-[.125rem] ">
              username
              <span className="text-[.75rem] text-[5a5a5a] ml-[.5rem] font-medium ">
                1 day ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              error fuga. Possimus pariatur culpa, aut quis est odit hic. Velit
              tenetur quam doloremque, facere nemo eum pariatur laboriosam dolor
              nesciunt?
            </p>
            <div className="flex-div mx-o my-2 text-[.92rem] ">
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={like}
                alt=""
              />
              <span className="mr-[1.25rem] text-[5a5a5a] ">244</span>
              <img
                className="rounded-none w-[1.25rem] mr-[.3125rem] "
                src={dislike}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
