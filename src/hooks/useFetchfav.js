import { useEffect, useState } from "react";
import axios from "axios";

const useFetchfav = (url) => {
  const [datalist, setData] = useState([]);
  const [datafav, setDatafav] = useState([]);
  const [loading1, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
        //setDatafav(res.data.favorites)
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch1 = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data.favorites);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { datalist,reFetch1 ,loading1};
};

export default useFetchfav;
