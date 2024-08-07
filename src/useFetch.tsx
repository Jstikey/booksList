import { useReducer } from "react";
import { Books } from "./books";
import { CLEAR, DELETE, RESET } from "./action";
import { reducer } from "./reducer";

const defaultState = {
  books: Books,
};

export const BooksCom = () => {
  const deleteBook = (id: number) => {
    dispatch({ type: DELETE, id });
  };

  const handleClear = () => {
    dispatch({ type: CLEAR });
  };

  const handleReset = () => {
    dispatch({ type: RESET });
  };

  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <div>
      {state.books.map(({ id, image, Author, Title }) => (
        <div className="indiv form" key={id}>
          <img className="indiv img" src={image} alt="" />
          <h3>{Title}</h3>
          <h4>{Author}</h4>
          <button className="btn" onClick={() => deleteBook(id)}>
            remove
          </button>
        </div>
      ))}
      {state.books.length === 0 ? (
        <button onClick={handleReset} className="btn">
          reset
        </button>
      ) : (
        <button onClick={handleClear} className="btn">
          clear
        </button>
      )}
    </div>
  );
};
