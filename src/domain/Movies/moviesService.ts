import { apiAdapter } from "@/src/api/apiAdapter";
import { Page } from "@/src/infra/hooks/usePaginatedList";
import { moviesAdapter } from "./moviesAdapter";
import { moviesAPI } from "./moviesApi";
import { Movie, MovieDetails, MovieVideo } from "./moviesTypes";

async function getAllPopular(page?: number): Promise<Page<Movie>> {
  const responseApi = await moviesAPI.getAllPopular({ page });
  return apiAdapter.toPageModel(responseApi, moviesAdapter.toMovies);
}

async function getByQuery(page?: number, query?: string): Promise<Page<Movie>> {
  const responseApi = await moviesAPI.getByQuery({ page, query });
  return apiAdapter.toPageModel(responseApi, moviesAdapter.toMovies);
}

async function getById(id: number): Promise<MovieDetails> {
  const responseApi = await moviesAPI.getById(id);
  return moviesAdapter.toMovieDetails(responseApi);
}

async function getVideoById(id: number): Promise<MovieVideo> {
  const responseApi = await moviesAPI.getVideoById(id);
  return moviesAdapter.toVideo(responseApi);
}

export const moviesService = {
  getAllPopular,
  getByQuery,
  getById,
  getVideoById,
};
