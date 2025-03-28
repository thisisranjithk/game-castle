import ExpandableText from "@/components/common/ExpandableText";
import Loader from "@/components/common/Loader";
import GameAttributes from "@/components/Games/GameAttributes";
import GameScreenshots from "@/components/Games/GameScreenshots";
import GameTrailer from "@/components/Games/GameTrailer";
import useGame from "@/hooks/useGame";
import { GameTailerFallback } from "@/utils/ErrorBoundary";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { gameSlug } = useParams();
  const { data: game, isLoading, error } = useGame(gameSlug!);

  if (isLoading) return <Loader />;
  if (error) throw error;

  return (
    <Grid
      templateColumns={{
        lg: "repeat(2, 1fr)",
      }}
      mx={5}
      gap={5}
    >
      <GridItem>
        <Heading
          fontSize={{
            base: "3xl",
            md: "4xl",
            lg: "5xl",
          }}
          my={5}
        >
          {game?.name}
        </Heading>
        <ExpandableText>{String(game?.description_raw)}</ExpandableText>
        <GameAttributes game={game!} />
      </GridItem>
      <GridItem>
        <ErrorBoundary FallbackComponent={GameTailerFallback}>
          <GameTrailer gameId={gameSlug!} />
        </ErrorBoundary>
        <GameScreenshots gameId={gameSlug!} />
      </GridItem>
    </Grid>
  );
};

export default GameDetailsPage;
