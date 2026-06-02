import MusicCard from "./MusicCard";

function MusicList({
  songs,
  deleteSong,
}) {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <MusicCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          cover={song.cover}
          onDelete={() => deleteSong(song.id)}
        />
      ))}
    </div>
  );
}

export default MusicList;