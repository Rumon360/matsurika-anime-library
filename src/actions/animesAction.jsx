import axios from "axios";
import {
  topAiringUrl,
  topAnimeUrl,
  topUpcomingUrl,
  searchAnimeUrl,
} from "../api";

// Action Creator

export const loadAnimes = () => async (dispatch) => {
  // Fetch axios
  const topAnimes = await axios.get(topAnimeUrl());
  const airingAnimes = await axios.get(topAiringUrl());
  const upcomingAnimes = await axios.get(topUpcomingUrl());
  dispatch({
    type: "FETCH_ANIMES",
    payload: {
      top: topAnimes.data.top.slice(0, 10),
      airing: airingAnimes.data.top.slice(0, 10),
      upcoming: upcomingAnimes.data.top.slice(0, 10),
    },
  });
};
export const fetchSearch = (anime_name) => async (dispatch) => {
  const searchAnimes = await axios.get(searchAnimeUrl(anime_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchAnimes.data.results.slice(0, 15),
    },
  });
};

export const clearSearch = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_SEARCHED",
    payload: {
      searched: [],
    },
  });
};
