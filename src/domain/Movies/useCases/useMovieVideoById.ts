import { useQuery } from "@tanstack/react-query";
import { moviesService } from "../moviesService";

export function useMovieVideoById(id: number) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["MovieVideoByID", id],
    queryFn: () => moviesService.getVideoById(id),
    staleTime: 1000 * 30,
    enabled: true,
  });

  return {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
