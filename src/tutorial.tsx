import { useEffect, useState } from "react";

interface NasaProps {
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}
export const FetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [nasa, setNasa] = useState<NasaProps | null>(null);

  const getData = async () => {
    try {
      const resp = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=99Oi8bhW77Bf4EnjoaAhnmfJe5Za606gskWfiXAg"
      );

      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      // const { explanation, hdurl, title, url } = await resp.json();
      const data = await resp.json();
      setNasa(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>there was an error loading this page</h1>;
  if (!nasa) return;
  const { explanation, hdurl, url, title } = nasa;
  return (
    <div>
      <h2>{title}</h2>
      <img
        style={{ objectFit: "cover", width: "200px", height: "250px" }}
        src={hdurl}
        alt=""
      />
      <p>{explanation}</p>
      <a href={url}>go there</a>
    </div>
  );
};
