import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const settings = {
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            }
        }
        const request = await fetch(url, settings);
        if( !request.ok ){
            throw new Error("Error HTTP: " + request.status);
        }
        const response = await request.json();
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    })();
  }, [url]);

  return { data, loading };
};
