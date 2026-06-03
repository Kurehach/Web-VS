import React from "react";

class BookInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      author: "",
      imageUrl: "",
    };

    this.onNameChangeEventHandler =
      this.onNameChangeEventHandler.bind(this);

    this.onAuthorChangeEventHandler =
      this.onAuthorChangeEventHandler.bind(this);

    this.onImageChangeEventHandler =
      this.onImageChangeEventHandler.bind(this);

    this.onSubmitEventHandler =
      this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onAuthorChangeEventHandler(event) {
    this.setState({
      author: event.target.value,
    });
  }

  onImageChangeEventHandler(event) {
    this.setState({
      imageUrl: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addBook(this.state);

    this.setState({
      name: "",
      author: "",
      imageUrl: "",
    });
  }

  render() {
    return (
      <form
        className="book-input"
        onSubmit={this.onSubmitEventHandler}
      >
        <input
          type="text"
          placeholder="Nama Buku"
          value={this.state.name}
          onChange={this.onNameChangeEventHandler}
          required
        />

        <input
          type="text"
          placeholder="Penulis"
          value={this.state.author}
          onChange={this.onAuthorChangeEventHandler}
          required
        />

        <input
          type="text"
          placeholder="URL Cover Buku"
          value={this.state.imageUrl}
          onChange={this.onImageChangeEventHandler}
          required
        />

        <button type="submit">
          Tambah Buku
        </button>
      </form>
    );
  }
}

export default BookInput;