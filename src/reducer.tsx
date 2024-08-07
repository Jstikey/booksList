import { CLEAR, DELETE, RESET } from "./action";
import { Books } from "./books";

type Action =
  | { type: typeof CLEAR }
  | { type: typeof DELETE; id: number }
  | { type: typeof RESET };

//  BOOKS PROPS
interface booksProps {
  Author: string;
  Title: string;
  image: string;
  id: number;
}

interface state {
  books: booksProps[];
}

export const reducer = (state: state, action: Action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    case "CLEAR":
      return { ...state, books: [] };
    case "RESET":
      return { ...state, books: Books };
    default:
      return state;
  }
};
