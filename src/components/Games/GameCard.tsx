import { Card, Flex, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatFormIcons from "./PlatFormIcons";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "@/services/image-url";

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
          <PlatFormIcons
            platfroms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
