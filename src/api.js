// Base Url
const base_url = "https://api.jikan.moe/v3/";
const top_airing_animes = "top/anime/1/airing";
const top_anime_series = "top/anime/1";
const top_upcoming_animes = "top/anime/1/upcoming";

export const topAiringUrl = () => {
  return `${base_url}${top_airing_animes}`;
};
export const topAnimeUrl = () => {
  return `${base_url}${top_anime_series}`;
};
export const topUpcomingUrl = () => {
  return `${base_url}${top_upcoming_animes}`;
};
// Anime Details

export const getDetailsUrl = (game_id) => {
  return `${base_url}anime/${game_id}`;
};

// Anime ScreenShots

export const animeScreenShotUrl = (game_id) => {
  return `${base_url}anime/${game_id}/pictures`;
};

// Searched Anime

export const searchAnimeUrl = (anime_name) => {
  return `${base_url}search/anime?q=${anime_name}&page=1`;
};
