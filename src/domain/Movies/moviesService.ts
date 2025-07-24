import { apiAdapter } from "@/src/api/apiAdapter";
import { Page } from "@/src/infra/hooks/usePaginatedList";
import { moviesAdapter } from "./moviesAdapter";
import { moviesAPI } from "./moviesApi";
import { Movie } from "./moviesTypes";

async function getAllPopular(page?: number): Promise<Page<Movie>> {
  const responseApi = await moviesAPI.getAllPopular({ page });
  return apiAdapter.toPageModel(responseApi, moviesAdapter.toMovies);
}

export const moviesService = {
  getAllPopular,
};
