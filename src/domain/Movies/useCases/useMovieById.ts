import { useQuery } from "@tanstack/react-query";
import { moviesService } from "../moviesService";

export function useMovieById(id: number) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["MovieByID", id],
    queryFn: () => moviesService.getById(id),
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
