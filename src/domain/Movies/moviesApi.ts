import { api } from "@/src/api/apiConfig";
import { PageParams } from "@/src/api/apiTypes";
import { Page } from "@/src/infra/hooks/usePaginatedList";
import { MovieAPI, MovieDetailsAPI, MovieVideoAPI } from "./moviesTypes";

async function getAllPopular(params?: PageParams): Promise<Page<MovieAPI>> {
  const response = await api.get<Page<MovieAPI>>("discover/movie", {
    params: {
      with_genres: "16,12,14",
      sort_by: "popularity.desc",
      ...params,
    },
  });

  return response.data;
}

async function getByQuery(
  params?: PageParams & { query?: string }
): Promise<Page<MovieAPI>> {
  const response = await api.get<Page<MovieAPI>>("search/movie", {
    params: {
      ...params,
      with_genres: "12,16",
      include_adult: false,
    },
  });

  const ALLOWED_GENRES = [12, 16];

  const filteredResults = response.data.results.filter(
    (movie) =>
      !movie.adult && movie.genre_ids.some((id) => ALLOWED_GENRES.includes(id))
  );

  return {
    ...response.data,
    results: filteredResults,
  };
}

async function getById(id: number): Promise<MovieDetailsAPI> {
  const response = await api.get<MovieDetailsAPI>(`movie/${id}`);

  return response.data;
}

async function getVideoById(id: number): Promise<MovieVideoAPI> {
  const response = await api.get<MovieVideoAPI>(`movie/${id}/videos`);

  return response.data;
}

export const moviesAPI = { getAllPopular, getByQuery, getById, getVideoById };
