import { Sort } from "@/components/Games/SortSelector";
import useData from "./useData";
import apiClient from "@/services/api-client";
import { FetchResponse, Game, Genre, Platform } from "@/utils/interfaces";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSort: Sort | null,
  searchValue: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort?.value,
        search: searchValue,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSort?.value, searchValue]
  );

export default useGames;
