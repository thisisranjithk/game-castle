import { Sort } from "@/components/Games/SortSelector";
import { useQuery } from "@tanstack/react-query";
import { Game, Genre, Platform } from "@/utils/interfaces";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Game>("/games");

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
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
          ordering: selectedSort?.value,
          search: searchValue,
        },
      }),
  });

export default useGames;
