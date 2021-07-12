const initState = {
  top: [],
  airing: [],
  upcoming: [],
  searched: [],
};

const animesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ANIMES":
      return {
        ...state,
        top: action.payload.top,
        airing: action.payload.airing,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default animesReducer;
