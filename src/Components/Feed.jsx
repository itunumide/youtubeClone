import { Link } from "react-router-dom";
import useGetApi from "../Hooks/useGetApi";
import { valueConverter } from "../data";
import moment from "moment";

const Feed = ({ category }) => {
  const { data, loading, error } = useGetApi(`videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}`);

  if (loading) return <h1 className="text-center">Loading</h1>;
  if (error) return <h1>An error has occurred</h1>;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-[1rem] gap-y-[2.95rem] mt-[.95rem] ">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index}>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className=" w-full rounded-[.4rem]  "
            />
            <h2 className="text-[1rem] text-[#000] mx-0 my-[.32rem] font-semibold ">
              {item.snippet.title}
            </h2>
            <h3 className="text-[.9rem] text-[#555] mx-0 my-[.375rem] font-semibold ">
              {item.snippet.channelTitle}
            </h3>
            <p className="text-[.9rem] ">{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
