// import { FC, useState } from "react";
// import { submitProps } from "./App";

// export const Form: FC<submitProps> = ({ handleSubmit }) => {
//   const [name, setName] = useState<string>("");

//   const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     handleSubmit(name);
//     setName("");
//   };

//   return (
//     <form className="form" onSubmit={onSubmit}>
//       <div>
//         <label htmlFor="name" className="form-label">
//           name
//         </label>
//         <input
//           value={name}
//           onChange={handleName}
//           type="text"
//           className="form-input"
//           id="name"
//         />
//       </div>
//       <button type="submit" className="btn">
//         submit
//       </button>
//     </form>
//   );
// };
