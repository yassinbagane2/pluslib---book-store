import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

const BooksList = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [books, setBooks] = useState([]);
  const handleDeleteBook = (bookId) => {
    axios
      .delete(`http://localhost:5000/books/${bookId}`)
      .then((res) => {
        const filtredBooks = books.filter((book) => book.bookId !== bookId);
        console.log(filtredBooks);
        setBooks(filtredBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (text) {
      const delayDebounchFn = setTimeout(() => {
        setLoading(true);
        axios
          .get("https://openlibrary.org/search.json?q=" + text)
          .then((res) => {
            console.log(res.data.docs);
            setBooks(res.data.docs.slice(0, 6));
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }, 500);
      return () => clearTimeout(delayDebounchFn);
    }
  }, [text]);

  return (
    <div className="max-w-[1100px] mx-auto py-3">
      <div className="flex justify-center">
        <h2 className="text-3xl text-gray-800 border-b-2  w-fit pb-3 border-b-green-600">
          Recently added books
        </h2>
      </div>
      <div className="py-3 px-8 border border-gray-200">
        <form className="flex justify-end">
          <input
            name="search"
            id="search"
            autoComplete="off"
            className="border mb-4 rounded-md px-3 py-2 w-80 h-10 outline-none"
            placeholder="Search for a book"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        {loading ? (
          <div className="flex items-center justify-center">Loading..</div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {books?.map((book, i) => (
              <BookCard
                key={i}
                bookId={book.bookId}
                title={book.title}
                author={book.author || book.author_name || "Unknown"}
                published={book.published || book.first_publish_year}
                editions={
                  book.editions_count || book.edition_count || "Unknown"
                }
                imageUrl={
                  book.imageUrl ||
                  `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                }
                handleDeleteBook={handleDeleteBook}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksList;
