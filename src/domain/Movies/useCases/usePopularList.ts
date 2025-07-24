import { usePaginatedList } from "@/src/infra/hooks/usePaginatedList";
import { moviesService } from "../moviesService";

export function usePopularList() {
  return usePaginatedList(["Movies"], moviesService.getAllPopular);
}
