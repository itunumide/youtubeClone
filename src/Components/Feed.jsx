import { Link } from "react-router-dom";
import useGetApi from "../Hooks/useGetApi";
import { valueConverter } from "../data";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../data";

const Feed = ({ category, searchTerm }) => {
  const apiEndpoint = searchTerm
    ? `search?part=snippet&maxResults=40&q=${encodeURIComponent(
        searchTerm
      )}&type=video`
    : `videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}`;

  const { data, loading, error } = useGetApi(apiEndpoint);
  const[loadingSearch, setLoadingSearch] =useState(false)
  const [videosWithDetails, setVideosWithDetails] = useState([]);

  
  useEffect(() => {
    if (data) {
      // Create a function to fetch video details using axios
      const fetchVideoDetails = async () => {
        setLoadingSearch(true)
        try {
          const videosWithDetails = await Promise.all(
            data.map(async (item) => {
              const videoId = item.id.videoId;

              // Use the ternary operator to check if the item has a videoId
              // If searchTerm is available, fetch videoId from the search result
              const videoDetailsResponse = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId || item.id}&key=${API_KEY}`
              );

              // Log the response to check the structure
              
              const videoDetails = videoDetailsResponse.data.items[0];

              // Log the video details
              

              // Extract categoryId and videoId from video details
              const categoryId = videoDetails?.snippet?.categoryId;
              const videoItemId = videoDetails?.id;

              // Return an object with the required properties
              return { ...item, categoryId, videoItemId, videoId };
            })
          );
          setVideosWithDetails(videosWithDetails);
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
        finally{
          setLoadingSearch(false)
        }
      };

      fetchVideoDetails();
    }
  }, [data]);


  if (loading || loadingSearch) return <h1 className="text-center">Loading</h1>;
  if (error) return <h1>An error has occurred</h1>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-[1.5rem] gap-y-[2.95rem] mt-[.95rem] ">
      {videosWithDetails.map((item, index) => {
        const {categoryId, videoItemId, } = item;

        return (
          <Link to={`video/${categoryId}/${videoItemId}`} className="hover:scale-110" key={index}>
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
            <p className="text-[.9rem] ">
              {valueConverter(item?.statistics?.viewCount || "1M")} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
