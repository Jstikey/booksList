import { FC, useState } from "react";

interface question {
  id: number;
  title: string;
  info: string;
}

interface questionProps {
  question: question;
}
export const IndiviQuestion: FC<questionProps> = ({
  question: { id, info, title },
}) => {
  const [show, setShow] = useState(false);
  return (
    <article className="question" key={id}>
      <aside>
        <h4>{title}</h4>
        <p>{show && info}</p>
      </aside>
      <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
    </article>
  );
};
