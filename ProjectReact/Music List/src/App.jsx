import MusicForm from "./components/MusicForm";
import MusicCard from "./components/MusicCard";
import MusicList from "./components/MusicList";
import { useState } from "react";
import "./styles/style.css"

import img1 from "./assets/01.jpeg";
import img2 from "./assets/02.jpeg";
import img3 from "./assets/03.jpeg";
import img4 from "./assets/04.jpg";
import img5 from "./assets/05.jpg";

function App() {
  const coverOptions = [img1, img2, img3, img4, img5];

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [cover, setCover] = useState("");

  const [songs, setSongs] = useState([]);

  const addSong = () => {
    if (!title.trim() || !artist.trim()) {
      alert("Judul lagu dan artist harus diisi!");
      return;
    }

    setSongs([
      ...songs,
      {
        id: Date.now(),
        title,
        artist,
        cover,
      },
    ]);

    setTitle("");
    setArtist("");
    setCover("");
  };

  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  const uploadCover = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCover(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <h1 className="title">🎵 Music List</h1>

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

        <h3>Select Cover</h3>

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

        <p>or Upload Your Own Cover</p>

        <input
          type="file"
          accept="image/*"
          onChange={uploadCover}
        />

        <button onClick={addSong}>
          Tambah Lagu
        </button>
      </div>

      <div className="song-list">
        {songs.map((song) => (
          <div className="card" key={song.id}>
            {song.cover && (
              <img
                src={song.cover}
                alt={song.title}
                className="cover"
              />
            )}

            <h3>{song.title}</h3>

            <p>
              <strong>Artist:</strong> {song.artist}
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteSong(song.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;