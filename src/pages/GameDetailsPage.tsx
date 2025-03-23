import ExpandableText from "@/components/common/ExpandableText";
import GameAttributes from "@/components/Games/GameAttributes";
import GameScreenshots from "@/components/Games/GameScreenshots";
import GameTrailer from "@/components/Games/GameTrailer";
import useGame from "@/hooks/useGame";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { gameSlug } = useParams();
  const { data: game, isLoading, error } = useGame(gameSlug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Flex flexDirection="column" mx={5}>
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
      <GameTrailer gameId={gameSlug!} />
      <GameScreenshots gameId={gameSlug!} />
    </Flex>
  );
};

export default GameDetailsPage;
