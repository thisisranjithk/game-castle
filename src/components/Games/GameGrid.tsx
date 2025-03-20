import useGames from "@/hooks/useGames";
import { Genre, Platform } from "@/utils/interfaces";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GameCardSkeleton from "../Skeletons/GameCardSkeleton";
import GameCard from "./GameCard";
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
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(selectedGenre, selectedPlatform, selectedSort, searchValue);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <>
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
