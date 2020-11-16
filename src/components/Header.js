import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";

function Header({ user }) {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__rigth">
        <Avatar src={user?.images[0]?.url} alt="CH" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
