function BookImage({ imageUrl }) {
  return (
    <div className="book-image">
      <img src={imageUrl} alt={name} />
    </div>
  );
}

export default BookImage;