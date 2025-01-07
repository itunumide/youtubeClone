
import useGetApi from "../Hooks/useGetApi";
import { valueConverter } from "../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const {data, loading, error} = useGetApi(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}`
  );
 console.log(data);
 
  if (loading) return <h1 className="text-center">Loading</h1>;
  if (error) return <h1>An error has occurred</h1>;

  return (
    <div className="flex-[0_0_30%]">
      {data.map((item,index)=>{
        return(<Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="flex justify-between mb-[.5rem] ">
          <img src={item.snippet.thumbnails.medium.url} alt="" className="flex-[0_0_49%] w-[50%] " />
          <div className="flex-[0_0_49%]">
            <h4 className="text-[.8125rem] font-medium mb-[.3125rem] ">
            {item.snippet.title}
            </h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{valueConverter(item.statistics.viewCount)} views</p>
          </div>
        </Link>)
      })}
      
    </div>
  );
};

export default Recommended;
