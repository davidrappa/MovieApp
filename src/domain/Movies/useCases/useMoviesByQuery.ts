import { usePaginatedList } from "@/src/infra/hooks/usePaginatedList";
import { moviesService } from "../moviesService";

export function useMoviesByQuery(query?: string) {
  return usePaginatedList(["MoviesByQuery"], moviesService.getByQuery, query);
}
