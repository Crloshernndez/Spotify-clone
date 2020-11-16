import React from "react";
import "./styles/Player.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <div className="player__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
