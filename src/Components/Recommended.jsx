
import useGetApi from "../Hooks/useGetApi";
import { valueConverter } from "../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId, searchTerm }) => {
  const {data, loading, error} = useGetApi(
    `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}`
  );
 
 
  if (loading) return <h1 className="text-center">Loading</h1>;
  if (error) return <h1>An error has occurred</h1>;
  const filteredData = searchTerm
    ? data.filter((item) =>
        item.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <div className="flex-[0_0_98%] md:flex-[0_0_29%]">
      {filteredData.map((item,index)=>{
        return(<Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="flex hover:scale-110 justify-between mb-[1rem] ">
          <img src={item.snippet.thumbnails.medium.url} alt="" className="flex-[0_0_49%] rounded-md w-[50%] " />
          <div className="flex-[0_0_49%] ml-3">
            <h4 className="text-[.8125rem] font-medium mb-[.3125rem] ">
            {item.snippet.title}
            </h4>
            <p className="text-[.8rem] ">{item.snippet.channelTitle}</p>
            <p className="text-[.8rem] ">{valueConverter(item.statistics.viewCount)} views</p>
          </div>
        </Link>)
      })}
      
    </div>
  );
};

export default Recommended;
