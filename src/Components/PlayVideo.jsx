import moment from "moment";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import save from "../assets/save.png";
import share from "../assets/share.png";
import useGetApi from "../Hooks/useGetApi";
import { valueConverter } from "../data";
import { useParams } from "react-router-dom";


const PlayVideo = () => {
  const {videoId} = useParams()

  const { data, loading, error } = useGetApi(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
  );

  const channelId = data && data[0]?.snippet?.channelId;

  const {
    data: channelData,
    loading: channelLoading,
    error: channelError,
  } = useGetApi(
    channelId
      ? `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}`
      : null // Avoid making API call if `channelId` is not available
  );

  const {
    data: commentData,
    loading: commentLoading,
    error: commentError,
  } = useGetApi(
    `commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoId}`
  );

  if (loading || channelLoading || commentLoading)
    return <h1 className="text-center">Loading...</h1>;
  if (error || channelError || commentError)
    return <h1 className="text-center">An error has occurred</h1>;

  console.log(commentData);

  const videoData = data && data[0];
  const channelInfo = channelData && channelData[0];
  const commentInfo = commentData;

  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_69%]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        className="w-full h-[50vw] md:h-[37vw]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="mt-[1.9rem] mb-0 font-semibold text-[1.4rem]">
        {videoData?.snippet?.title || "Title here"}
      </h3>
      <div className="flex-div justify-between flex-wrap mt-[.3rem] text-[.875rem] text-[#5a5a5a]">
        <p>
          {valueConverter(videoData?.statistics?.viewCount || 0)} views &bull;{" "}
          {moment(videoData?.snippet?.publishedAt).fromNow()}
        </p>
        <div>
          <span className="ml-0 mr-[.9375rem] md:mr-0 mt-[.9375rem] md:mt-0 md:ml-[.95rem] inline-flex items-center">
            <img src={like} alt="" className="w-[1.25rem] mr-[.5rem]" />
            {valueConverter(videoData?.statistics?.likeCount || 0)}
          </span>
          <span className="ml-0 mr-[.9375rem] md:mr-0 mt-[.9375rem] md:mt-0 md:ml-[.95rem] inline-flex items-center">
            <img src={dislike} alt="" className="w-[1.25rem] mr-[.5rem]" />
          </span>
          <span className="ml-0 mr-[.9375rem] md:mr-0 mt-[.9375rem] md:mt-0 md:ml-[.95rem] inline-flex items-center">
            <img src={share} alt="" className="w-[1.25rem] mr-[.5rem]" />
            Share
          </span>
          <span className="ml-0 mr-[.9375rem] md:mr-0 mt-[.9375rem] md:mt-0 md:ml-[.95rem] inline-flex items-center">
            <img src={save} alt="" className="w-[1.25rem] mr-[.5rem]" />
            Save
          </span>
        </div>
      </div>
      <hr className="h-[1px] bg-[#ccc] mx-0 my-[1rem] border-none" />
      <div className="mt-[1.25rem] flex-div">
        <img
          src={channelInfo?.snippet?.thumbnails.default.url || ""}
          alt="profile"
          className="w-10 rounded-[50%] mr-[.94rem]"
        />
        <div className="flex-1 leading-[1.125rem]">
          <p className="text-[#000] font-semibold text-[1.125rem]">
            {videoData?.snippet?.channelTitle || "Channel Name"}
          </p>
          <span className="text-[.8125rem] text-[#5a5a5a]">
            {valueConverter(channelInfo?.statistics.subscriberCount) || "1M"}{" "}
            Subcribers
          </span>
        </div>
        <button className="bg-red-500 text-white px-[1.9rem] py-[.5rem] border-none outline-none rounded-md cursor-pointer">
          Subscribe
        </button>
      </div>
      <div className="pl-0 md:pl-[3.45rem] mx-[0] mb-[.95rem]">
        <p className="text-[#5a5a5a] text-[.813rem] mb-[.3125rem]">
          {videoData?.snippet?.description.length > 250
            ? `${videoData?.snippet?.description.slice(0, 250)}...`
            : videoData?.snippet?.description || "Description here"}
        </p>
        <hr />
        <h4 className="text-[#5a5a5a] text-[.813rem] mt-[.94rem]">
          {valueConverter(videoData?.statistics?.commentCount || " 0")} comments
        </h4>

        {commentInfo.map((item, index) => {
          return (
            <div className="flex-div mx-0 my-[1.25rem] " key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="w-[2.125rem] rounded-[50%] mr-[.94rem]  "
              />
              <div className="">
                <h3 className="text-[.9rem] mb-[.125rem] ">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span className="text-[.75rem] text-[5a5a5a] ml-[.5rem] font-medium ">
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>
                  {item.snippet.topLevelComment.snippet.textDisplay.length > 100
                    ? `${item.snippet.topLevelComment.snippet.textDisplay.slice(0, 250)}...`
                    : item.snippet.topLevelComment.snippet.textDisplay || "Description here"}
                </p>
                <div className="flex-div mx-o my-2 text-[.92rem] ">
                  <img
                    className="rounded-none w-[1.25rem] mr-[.3125rem] "
                    src={like}
                    alt=""
                  />
                  <span className="mr-[1.25rem] text-[5a5a5a] ">
                    {valueConverter(
                      item?.snippet?.topLevelComment?.snippet.likeCount
                    ) || 3}
                  </span>
                  <img
                    className="rounded-none w-[1.25rem] mr-[.3125rem] "
                    src={dislike}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
