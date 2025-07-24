import axios from "axios";
import Constants from "expo-constants";

const TMDB_API_KEY = Constants.expoConfig?.extra?.tmdbApiKey;

export const BASE_URL = "https://api.themoviedb.org/3/";
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + TMDB_API_KEY,
  },
});
