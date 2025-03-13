import useGames, { Platform } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "../Skeletons/GameCardSkeleton";
import { Genre } from "@/hooks/useGeners";
import { Sort } from "./SortSelector";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedSort: Sort | null;
  searchValue: string;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedSort,
  searchValue,
}: Props) => {
  const { error, data, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSort,
    searchValue
  );
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        gap={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
