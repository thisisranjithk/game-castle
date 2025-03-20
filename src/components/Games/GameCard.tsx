import { getCroppedImageUrl } from "@/services/image-url";
import { IconErrorFallback } from "@/utils/ErrorBoundary";
import { Game } from "@/utils/interfaces";
import { Card, Flex, Image } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import CriticScore from "./CriticScore";
import PlatFormIcons from "./PlatFormIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        width={"full"}
        height={"214px"}
      ></Image>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Flex justifyContent={"space-between"}>
          <ErrorBoundary FallbackComponent={IconErrorFallback}>
            <PlatFormIcons
              platfroms={game.parent_platforms.map((p) => p.platform)}
            />
          </ErrorBoundary>
          <CriticScore score={game.metacritic} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
