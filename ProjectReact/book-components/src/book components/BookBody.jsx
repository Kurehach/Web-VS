function BookBody({ name, author }) {
  return (
    <div className="book-body">
      <h3 className="book-title">{name}</h3>
      <p className="book-author">{author}</p>
    </div>
  );
}

export default BookBody;