import useGeners, { Genre } from "@/hooks/useGeners";
import { getCroppedImageUrl } from "@/services/image-url";
import { Button, Flex, Heading, Image, List, Text } from "@chakra-ui/react";
import GenreListItemSkeletem from "../Skeletons/GenreListItemSkeletem";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGeners();

  return (
    <>
      <Heading fontSize="2xl" mb={5}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {error && <Text>{error}</Text>}
        {isLoading && <GenreListItemSkeletem />}
        {data.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
                onClick={() => setSelectedGenre(genre)}
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
