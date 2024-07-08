import { useEffect } from 'react';
import axios from 'axios';
import useApiStore from '../model/store';

const useFetchData = (url) => {
  const { setData, setError, setLoading, data, error, loading } = useApiStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, setData, setError, setLoading]);

  return { data, error, loading };
};

export default useFetchData;
