function MusicCard({
  title,
  artist,
  cover,
  onDelete,
}) {
  return (
    <div className="card">
      {cover && (
        <img
          src={cover}
          alt={title}
          className="cover"
        />
      )}

      <h3>{title}</h3>

      <p>
        <strong>Artist:</strong> {artist}
      </p>

      <button
        className="delete-btn"
        onClick={onDelete}
      >
        Hapus
      </button>
    </div>
  );
}

export default MusicCard;