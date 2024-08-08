import { FC } from "react";
import { person } from "./App";

interface indivProps {
  person: person;
  removePerson: (id: number) => void;
}
export const Person: FC<indivProps> = ({
  person: { name, id },
  removePerson,
}) => {
  return (
    <div className="indiv">
      <h3>{name}</h3>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
