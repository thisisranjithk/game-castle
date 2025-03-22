import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQuery from "@/store";
import { Text } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQuery((s) => s.gameQuery?.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuery((s) => s.gameQuery?.platformId);
  const platform = usePlatform(platformId);
  return (
    <Text fontSize="5xl" fontWeight="bold" mb={3}>
      {`${platform ? platform?.name : ""} ${genre ? genre?.name : ""} Games`}
    </Text>
  );
};

export default GameHeading;
