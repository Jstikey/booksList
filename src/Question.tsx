import questions from "./data";
import { IndiviQuestion } from "./individualQuestion";

export const Question = () => {
  return (
    <div>
      {questions.map((questions) => (
        <IndiviQuestion question={questions} />
      ))}
    </div>
  );
};
