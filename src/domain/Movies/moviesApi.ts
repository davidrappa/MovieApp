import { api } from "@/src/api/apiConfig";
import { PageParams } from "@/src/api/apiTypes";
import { Page } from "@/src/infra/hooks/usePaginatedList";
import { MovieAPI } from "./moviesTypes";

async function getAllPopular(params?: PageParams): Promise<Page<MovieAPI>> {
  const response = await api.get<Page<MovieAPI>>("movie/popular", { params });

  return response.data;
}

async function getByQuery(
  params?: PageParams & { query?: string }
): Promise<Page<MovieAPI>> {
  const response = await api.get<Page<MovieAPI>>("search/movie", { params });

  return response.data;
}

export const moviesAPI = { getAllPopular, getByQuery };
