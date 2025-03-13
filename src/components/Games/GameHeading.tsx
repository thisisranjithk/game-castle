import { Text } from "@chakra-ui/react";

interface Props {
  genre: string | undefined;
  platform: string | undefined;
}

const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Text fontSize="5xl" fontWeight="bold" mb={3}>
      {`${platform ? platform : ""} ${genre ? genre : ""} Games`}
    </Text>
  );
};

export default GameHeading;
