import useGame from "@/hooks/useGame";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { gameSlug } = useParams();
  const { data, isLoading, error } = useGame(gameSlug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <Flex flexDirection="column" mx={5}>
      <Heading fontSize="5xl" my={5}>
        {data?.name}
      </Heading>
      <Text>{data?.description_raw}</Text>
    </Flex>
  );
};

export default GameDetailsPage;
