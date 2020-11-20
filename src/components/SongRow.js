import React from "react";
import "./styles/SongRow.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SongRow({ track }) {
  const timeSong = (duration) => {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds + ".";
  };

  return (
    <div className="songRow">
      <div className="songRow__info-left">
        <h1>{track.name}</h1>
        <p>{track?.artists.map((artist) => artist.name)}</p>
      </div>
      <div className="songRow__info-rigth">
        <FavoriteIcon />
        <p>{timeSong(track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default SongRow;
