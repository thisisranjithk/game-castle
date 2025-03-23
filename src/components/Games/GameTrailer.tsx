import useGameTrailer from "@/hooks/useGameTrailer";
import { Box } from "@chakra-ui/react";

interface Props {
  gameId: string;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId!);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <Box borderRadius="md" overflow="hidden">
      <video
        controls
        width="100%"
        style={{ borderRadius: "8px" }}
        poster={data?.results[0].preview}
      >
        <source src={data?.results[0].data[480]} type="video/mp4" />
        <source src={data?.results[0].data.max} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default GameTrailer;
