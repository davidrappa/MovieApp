export interface MovieAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  title: string;
  rating: string;
  releaseYear: number;
  posterURL: string;
}

export interface MovieDetailsAPI {
  adult: boolean;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  budget: number;
  homepage: string;
  id: number;
  runtime: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  rating: string;
  releaseDate: string;
  duration: string;
  backdropURL: string;
  overview: string;
}
