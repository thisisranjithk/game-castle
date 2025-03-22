import APIClient from "@/services/api-client";
import useGameQuery from "@/store";
import { Game } from "@/utils/interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const { gameQuery } = useGameQuery();

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          platforms: gameQuery?.platformId,
          search: gameQuery?.searchText,
          ordering: gameQuery?.sortOrder,
          page: pageParam,
        },
      }),
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
