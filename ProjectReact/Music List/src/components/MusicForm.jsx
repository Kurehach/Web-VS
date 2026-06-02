function MusicForm({
  title,
  setTitle,
  artist,
  setArtist,
  addSong,
  cover,
  setCover,
  coverOptions,
  uploadCover,
}) {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Judul Lagu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <h3>Pilih Cover</h3>

      <div className="cover-list">
        {coverOptions.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`cover-${index}`}
            className={cover === img ? "selected" : ""}
            onClick={() => setCover(img)}
          />
        ))}
      </div>

      <p>Atau Upload Cover Sendiri</p>

      <input
        type="file"
        accept="image/*"
        onChange={uploadCover}
      />

      <button onClick={addSong}>
        Tambah Lagu
      </button>
    </div>
  );
}

export default MusicForm;