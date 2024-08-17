import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Tours from "./Tour";

export const Review = () => {
  const [index, setIndex] = useState(0);

  const CheckNumber = (NewIndex: number) => {
    if (NewIndex >= reviews.length) {
      return 0;
    }
    if (NewIndex <= 0) {
      return reviews.length - 1;
    }
    return NewIndex;
  };

  const inCreaseIndex = () => {
    setIndex(CheckNumber(index + 1));
  };
  const decreaseIndex = () => {
    setIndex(CheckNumber(index - 1));
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(CheckNumber(random));
  };
  return (
    <div className="person">
      <Tours review={reviews[index]} />

      <div className="buttonDiv">
        {index}
        <button onClick={decreaseIndex}>
          <FaChevronLeft />
        </button>
        <button onClick={inCreaseIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson}>random</button>
    </div>
  );
};
