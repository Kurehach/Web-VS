import React from "react";
import BookList from "./BookList";
import BookInput from "./BookInput";
import { getData } from "../utils/data";

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddBookHandler = this.onAddBookHandler.bind(this);
  }

  onDeleteHandler(id) {
    const books = this.state.books.filter(
      (book) => book.id !== id
    );

    this.setState({ books });
  }

  onAddBookHandler({ name, author, imageUrl }) {
    this.setState((prevState) => ({
      books: [
        ...prevState.books,
        {
          id: +new Date(),
          name,
          author,
          imageUrl,
        },
      ],
    }));
  }

  render() {
    return (
      <div className="book">
        <h2>Tambah Buku</h2>

        <BookInput addBook={this.onAddBookHandler} />

        <h2>Daftar Buku</h2>

        <BookList
          books={this.state.books}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default Book;