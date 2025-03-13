import { List, SkeletonText } from "@chakra-ui/react";

const GenreListItemSkeletem = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <List.Root listStyle="none">
      {skeletons.map((skeleton) => (
        <List.Item key={skeleton} mb={8}>
          <SkeletonText></SkeletonText>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreListItemSkeletem;
