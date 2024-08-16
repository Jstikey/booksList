import { FC } from "react";
import { personProps } from "./App";

interface peopleProps {
  people: personProps[];
}

const List: FC<peopleProps> = ({ people }) => {
  const date = new Date();
  const today = { day: date.getDate(), month: date.getMonth() + 1 };

  return (
    <>
      {people.map((person) => {
        const { name, dob, id, image, age } = person;
        const isToday = dob.day === today.day && dob.month === today.month;

        return (
          isToday && (
            <>
              <h1>{}</h1>
              <article className="person" key={id}>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <h5>{age}</h5>
              </article>
            </>
          )
        );
      })}
    </>
  );
};

export default List;
