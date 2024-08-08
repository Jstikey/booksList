// import { useState } from "react";
// import "./App.css";
// import { Form } from "./form";
// import { List } from "./list";

// export interface personProps {
//   name: string;
// }

// export interface submitProps {
//   handleSubmit: (name: string) => void;
// }

// export const person = [{ name: "joshua" }];

// //================= COMPONENT ===========================
// export const LowerState = () => {
//   const [people, setPeople] = useState(person);

//   const handleSubmit = (name: string) => {
//     if (name) setPeople((prev) => [...prev, { name: name }]);
//   };

//   return (
//     <div>
//       <Form handleSubmit={handleSubmit} />
//       <List people={people} />
//     </div>
//   );
// };
