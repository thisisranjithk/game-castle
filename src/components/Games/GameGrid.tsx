import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCardSkeleton from "../Skeletons/GameCardSkeleton";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedDataLength =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedDataLength}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
      endMessage={
        data && (
          <Text textAlign="center" fontWeight="bold" mt={5}>
            Yay! You have seen it all
          </Text>
        )
      }
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
