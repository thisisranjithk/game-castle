import { getCroppedImageUrl } from "@/services/image-url";
import { IconErrorFallback } from "@/utils/ErrorBoundary";
import { Game } from "@/utils/interfaces";
import { Card, Flex, Image } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import CriticScore from "./CriticScore";
import PlatFormIcons from "./PlatFormIcons";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card.Root
      overflow={"hidden"}
      onClick={() => navigate(`/games/${game?.slug}`)}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
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
