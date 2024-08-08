import { FC, memo } from "react";
import { person } from "./App";
import { Person } from "./individualPerson";

interface peopleProps {
  people: person[];
  removePerson: (id: number) => void;
}
const List: FC<peopleProps> = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => (
        <Person person={person} removePerson={removePerson} />
      ))}
    </div>
  );
};

export default memo(List);
