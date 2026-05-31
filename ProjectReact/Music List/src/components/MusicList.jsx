import MusicCard from "./MusicCard";

function MusicList({ songs, deleteSong }) {
  return (
    <>
      {songs.map((song) => (
        <MusicCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          onDelete={() => deleteSong(song.id)}
        />
      ))}
    </>
  );
}

export default MusicList;