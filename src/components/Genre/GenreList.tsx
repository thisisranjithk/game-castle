import useGeners from "@/hooks/useGeners";
import { getCroppedImageUrl } from "@/services/image-url";
import { Flex, Image, List, Text } from "@chakra-ui/react";
import GenreListItemSkeletem from "../Skeletons/GenreListItemSkeletem";

const GenreList = () => {
  const { data, isLoading, error } = useGeners();
  return (
    <List.Root listStyle="none">
      {error && <Text>{error}</Text>}
      {isLoading && <GenreListItemSkeletem />}
      {data.map((genre) => (
        <List.Item key={genre.id} mb={3}>
          <Flex gapX={3}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              objectFit="cover"
              borderRadius="5px"
            ></Image>
            <Text>{genre.name}</Text>
          </Flex>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
