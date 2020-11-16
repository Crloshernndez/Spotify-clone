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
    default:
      return state;
  }
};

export default reducer;
