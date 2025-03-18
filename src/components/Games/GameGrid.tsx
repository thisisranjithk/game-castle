import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "../Skeletons/GameCardSkeleton";
import { Sort } from "./SortSelector";
import { Genre, Platform } from "@/utils/interfaces";

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

  if (error) return <Text>{error.message}</Text>;
  return (
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
      {data?.results.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
