import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import useGameQuery from "@/store";
import { Box, Button } from "@chakra-ui/react";

export interface Sort {
  value: string;
  label: string;
}

const SortSelector = () => {
  const setSortOrder = useGameQuery((s) => s.setSortOrder);
  const sortOrder = useGameQuery((s) => s.gameQuery.sortOrder);
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const sortOrderLabel = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Box mb={4}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="md">
            {`Order By: ${sortOrderLabel?.label ?? "Relevence"}`}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {sortOrders.map((sortItem) => (
            <MenuItem
              key={sortItem.label}
              value={sortItem.value}
              onClick={() => setSortOrder(sortItem?.value)}
            >
              {sortItem.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default SortSelector;
