import { Sort } from "@/components/Games/SortSelector";
import useData from "./useData";
import { Genre } from "./useGeners";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

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
