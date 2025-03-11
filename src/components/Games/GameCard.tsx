import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";

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
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
