import ExpandableText from "@/components/common/ExpandableText";
import useGame from "@/hooks/useGame";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { gameSlug } = useParams();
  const { data, isLoading, error } = useGame(gameSlug!);

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
        {data?.name}
      </Heading>
      <ExpandableText>{String(data?.description_raw)}</ExpandableText>
    </Flex>
  );
};

export default GameDetailsPage;
