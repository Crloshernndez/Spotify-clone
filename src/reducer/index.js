const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN_TO_STORE":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_ALBUM":
      return {
        ...state,
        album: action.album,
      };
    default:
      return state;
  }
};

export default reducer;
