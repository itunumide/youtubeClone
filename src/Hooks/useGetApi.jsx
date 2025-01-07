import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../data";

const useGetApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://youtube.googleapis.com/youtube/v3/${endpoint}&key=${API_KEY}`;

  useEffect(() => {
    if (!endpoint) return;
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const result = response.data;
        if (result.items) {
          setData(result.items);
        } else {
          setError("No data received");
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useGetApi;
