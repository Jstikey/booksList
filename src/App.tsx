import "./App.css";
import { useCallback, useState } from "react";
import List from "../src/listPerson";

export interface person {
  name: string;
  id: number;
}

const data: person[] = [
  { name: "joshua", id: 1 },
  { name: "ruth", id: 2 },
  { name: "shedy", id: 3 },
  { name: "blessing", id: 4 },
];

//================= COMPONENT ===========================

const App = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback((id: number) => {
    setPeople(people.filter((person) => person.id !== id));
  }, []);

  return (
    <div className="form">
      <button className="btn" onClick={() => setCount(count + 1)}>
        count: {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

export default App;
