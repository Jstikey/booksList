import { FC } from "react";
import { appProps } from "./App";

export const Book: FC<appProps> = ({
  image,
  Author,
  Title,
  id,
  seriel,
  handleShowBook,
}) => {
  return (
    <div
      onClick={() =>
        handleShowBook({ Author: Author, Title: Title, image: image, id: id })
      }
      className="individual"
      key={id}
    >
      <article className="serielNumber"> #{seriel}</article>
      <img src={image} alt="" />
      <h3>{Title}</h3>
      <h4>{Author}</h4>
    </div>
  );
};
