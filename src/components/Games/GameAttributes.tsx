import { Game } from "@/utils/interfaces";
import { Grid, Box, Heading, Badge, Text } from "@chakra-ui/react";
import DefinitionItem from "../common/DefinitionItem";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" as="dl">
      <DefinitionItem term="Plaforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <Box my={5}>
        <Heading as="dt" color="grey">
          Metascore
        </Heading>
        <Badge colorPalette="green">{game?.metacritic}</Badge>
      </Box>
      <DefinitionItem term="Genres">
        {game?.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game?.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </Grid>
  );
};

export default GameAttributes;
