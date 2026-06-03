import BookBody from "./BookBody";
import BookImage from "./BookImage";
import DeleteButton from "./DeleteButton";

function BookItem({
  imageUrl,
  name,
  author,
  id,
  onDelete,
}) {
  return (
    <div className="book-item">
      <BookImage imageUrl={imageUrl} />
      <BookBody name={name} author={author} />
      <DeleteButton
        id={id}
        onDelete={onDelete}
      />
    </div>
  );
}

export default BookItem;