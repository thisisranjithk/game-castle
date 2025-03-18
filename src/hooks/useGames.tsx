import { Sort } from "@/components/Games/SortSelector";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetchResponse, Game, Genre, Platform } from "@/utils/interfaces";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSort: Sort | null,
  searchValue: string
) =>
  useQuery({
    queryKey: [
      "games",
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedSort?.value,
      searchValue,
    ],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
            ordering: selectedSort?.value,
            search: searchValue,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
