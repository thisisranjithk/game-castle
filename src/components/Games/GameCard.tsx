import { Card, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatFormIcons from "./PlatFormIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"}>
      <Image
        src={game.background_image}
        alt={game.name}
        width={"full"}
        height={"214px"}
      ></Image>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <PlatFormIcons
          platfroms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
