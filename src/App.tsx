import { Book } from "./book";
import { Books } from "./books";
import "./App.css";
import { useState } from "react";

export interface appProps extends bookProps {
  seriel: number;
  handleShowBook: (book: bookProps) => void;
}

interface bookProps {
  Title: string;
  image: string;
  Author: string;
  id: number;
}

const BookList = () => {
  const [showBook, setShowBook] = useState<bookProps | null>(null);

  const handleShowBook = (book: bookProps) => {
    setShowBook(book);
  };

  return (
    <main>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <section className={"bookList App"}>
        <div className="displayBook">
          <h2>Book title</h2>
          <div className="indiv">
            <img src={showBook?.image} alt="" />
            <h3>{showBook?.Title}</h3>
            <h4>{showBook?.Author}</h4>
          </div>
        </div>
        <div className="bookContainer">
          <h2>Amazon Best Selling Books</h2>
          <div className="book">
            {Books.map((book, index) => (
              <Book
                {...book}
                key={book.id}
                seriel={index + 1}
                handleShowBook={handleShowBook}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookList;
