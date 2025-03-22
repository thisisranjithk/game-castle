import useGeners from "@/hooks/useGeners";
import { getCroppedImageUrl } from "@/services/image-url";
import useGameQuery from "@/store";
import { Button, Flex, Heading, Image, List, Text } from "@chakra-ui/react";
import GenreListItemSkeletem from "../Skeletons/GenreListItemSkeletem";

const GenreList = () => {
  const { data, isLoading, error } = useGeners();
  const setGenreId = useGameQuery((s) => s.setGenreId);
  const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);
  return (
    <>
      <Heading fontSize="2xl" mb={5}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {error && <Text>{error.message}</Text>}
        {isLoading && <GenreListItemSkeletem />}
        {data?.results.map((genre) => (
          <List.Item key={genre.id} mb={3}>
            <Flex>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                objectFit="cover"
                borderRadius="5px"
              ></Image>
              <Button
                variant="plain"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : ""}
                onClick={() => setGenreId(genre?.id)}
              >
                {genre.name}
              </Button>
            </Flex>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
