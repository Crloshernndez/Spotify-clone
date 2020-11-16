export const setUser = (payload) => ({
  type: "SET_USER",
  user: payload,
});

export const setTokenToStore = (payload) => ({
  type: "SET_TOKEN_TO_STORE",
  token: payload,
});

export const setPlaylist = (payload) => ({
  type: "SET_PLAYLIST",
  playlist: payload,
});
