import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} fontSize={"14px"} spaceX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
