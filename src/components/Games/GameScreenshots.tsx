import useGameScreenshots from "@/hooks/useGameScreenshots";
import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";

interface Props {
  gameId: string;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  console.log(screenshots);
  return (
    <>
      <Heading my={5}>Screenshots</Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
        }}
        gap={5}
      >
        {screenshots?.results?.map((screenshot) => (
          <GridItem key={screenshot.id}>
            <Image
              src={screenshot.image}
              borderRadius={5}
              alt={`screenshot${screenshot.id}`}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GameScreenshots;
