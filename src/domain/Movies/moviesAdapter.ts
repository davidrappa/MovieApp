import { Movie, MovieAPI } from "./moviesTypes";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function toMovies(movieAPI: MovieAPI): Movie {
  return {
    title: movieAPI.title,
    releaseYear: new Date(movieAPI.release_date).getFullYear(),
    rating: movieAPI.vote_average.toPrecision(2),
    posterURL: TMDB_IMAGE_URL + movieAPI.poster_path,
  };
}
export const moviesAdapter = { toMovies };
