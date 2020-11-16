import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { connect } from "react-redux";
import { setUser, setTokenToStore } from "./action";

const spotify = new SpotifyWebApi();

function App(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        props.setUser(user);
        props.setTokenToStore(_token);
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

const mapDispatchToProps = {
  setUser,
  setTokenToStore,
};

export default connect(null, mapDispatchToProps)(App);
