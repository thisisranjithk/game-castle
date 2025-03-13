import useGeners, { Genre } from "@/hooks/useGeners";
import { getCroppedImageUrl } from "@/services/image-url";
import { Button, Flex, Image, List, Text } from "@chakra-ui/react";
import GenreListItemSkeletem from "../Skeletons/GenreListItemSkeletem";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ setSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGeners();
  return (
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
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </Flex>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
