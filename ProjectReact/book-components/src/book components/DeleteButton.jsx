function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="book-button-delete"
      onClick={() => onDelete(id)}
    >
      Hapus
    </button>
  );
}

export default DeleteButton;