import BookItem from "./BookItem";

function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          {...book}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookList;