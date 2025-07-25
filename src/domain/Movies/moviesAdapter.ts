import {
  Movie,
  MovieAPI,
  MovieDetails,
  MovieDetailsAPI,
  MovieVideo,
  MovieVideoAPI,
} from "./moviesTypes";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function toMovies(movieAPI: MovieAPI): Movie {
  return {
    id: movieAPI.id,
    title: movieAPI.title,
    releaseYear: new Date(movieAPI.release_date).getFullYear(),
    rating: movieAPI.vote_average.toPrecision(2),
    posterURL: TMDB_IMAGE_URL + movieAPI.poster_path,
  };
}
function toMovieDetails(movieDetailsAPI: MovieDetailsAPI): MovieDetails {
  const hours = Math.floor(movieDetailsAPI.runtime / 60);
  const minutes = movieDetailsAPI.runtime % 60;
  const formattedDuration = `${hours}h ${minutes}min`;

  return {
    id: movieDetailsAPI.id,
    title: movieDetailsAPI.title,
    releaseDate: new Date(movieDetailsAPI.release_date).toLocaleDateString(
      "en-GB"
    ),
    rating: movieDetailsAPI.vote_average.toPrecision(2),
    backdropURL: TMDB_IMAGE_URL + movieDetailsAPI.backdrop_path,
    duration: formattedDuration,
    overview: movieDetailsAPI.overview,
  };
}

function toVideo(videoAPI: MovieVideoAPI): MovieVideo {
  return {
    id: videoAPI.id,
    key: videoAPI.results[0].key,
    site: videoAPI.results[0].site,
  };
}
export const moviesAdapter = { toMovies, toMovieDetails, toVideo };
