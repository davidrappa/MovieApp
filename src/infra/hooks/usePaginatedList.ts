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
  baseQueryKey: readonly unknown[],
  getList: (page: number, searchQuery?: string) => Promise<Page<Data>>,
  searchQuery?: string,
  options?: PaginatedListOption
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey: [...baseQueryKey, searchQuery], // importante!
    queryFn: ({ pageParam = 1 }) => getList(pageParam, searchQuery),
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

  useEffect(() => {
    setList([]);
  }, [searchQuery]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
