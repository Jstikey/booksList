import { useEffect } from "react";

export const useFetch = (url: string) => {
  const getFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getFetch();
  }, []);

  return { getFetch };
};
