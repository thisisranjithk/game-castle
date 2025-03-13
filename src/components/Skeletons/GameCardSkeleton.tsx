import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="full" height="full">
      <Skeleton height="214px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
