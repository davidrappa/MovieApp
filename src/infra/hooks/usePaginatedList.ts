import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface Page<Data> {
  page: number;
  total_pages: number;
  results: Data[];
}

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

interface PaginatedListOption {
  enabled?: boolean;
  staleTime?: number;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
  options?: PaginatedListOption
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => getList(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    enabled: options?.enabled,
    staleTime: options?.staleTime,
    initialPageParam: 1,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.flatMap((page) => page.results);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
