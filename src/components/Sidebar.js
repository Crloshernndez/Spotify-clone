import React from "react";
import "./styles/Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { connect } from "react-redux";

function Sidebar({ playlist }) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlist?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    playlist: state.playlist,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
