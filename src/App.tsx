import { useState } from "react";
import "./App.css";
import { data } from "./data";
import List from "./list";

export interface personProps {
  id: number;
  name: string;
  age: number;
  image: string;
  dob: { day: number; month: number };
}

function App() {
  const [people, setPeople] = useState<personProps[]>(data);
  const date = new Date();
  const today = { day: date.getDate(), month: date.getMonth() - 1 };
  const personBirthDay = people.filter(
    (person) => person.dob.day === today.day && person.dob.month === today.month
  );

  return (
    <main>
      <section className="container">
        <h3> {personBirthDay.length} birthdays today </h3>

        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      ()
    </main>
  );
}
export default App;
