import { Sort } from "@/components/Games/SortSelector";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Game, Genre, Platform } from "@/utils/interfaces";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSort: Sort | null,
  searchValue: string
) =>
  useInfiniteQuery({
    queryKey: [
      "games",
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedSort?.value,
      searchValue,
    ],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
          ordering: selectedSort?.value,
          search: searchValue,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
