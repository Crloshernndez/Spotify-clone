import React from "react";
import "./styles/Body.css";
import Header from "./Header";
import { connect } from "react-redux";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify, album }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src="https://www.nme.com/wp-content/uploads/2016/09/2013DaftPunk_RandomAcessMemories600G010513.jpg"
          alt=""
        />
        <div className="body__infoText">
          <strong>{album?.album_type}</strong>
          <h2>{album?.name}</h2>
          <p>description</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {album?.tracks?.items?.map((song) => (
          <SongRow track={song} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    album: state.album,
  };
};

export default connect(mapStateToProps, null)(Body);
