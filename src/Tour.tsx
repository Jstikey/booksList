import { FC } from "react";
import { FaQuoteRight } from "react-icons/fa";

interface personProps {
  name: string;
  id: number;
  text: string;
  image: string;
  job: string;
}

interface rev {
  review: personProps;
}
export const Tours: FC<rev> = ({ review: { name, id, job, image, text } }) => {
  return (
    <div key={id}>
      <span className="icon" style={{ position: "absolute" }}>
        <FaQuoteRight />
      </span>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <h3>{job}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Tours;
