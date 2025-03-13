import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

export interface Sort {
  value: string;
  label: string;
}

interface Props {
  setSelectedSort: (selectedSort: Sort) => void;
  selectedSort: Sort | null;
}

const SortSelector = ({ setSelectedSort, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <Box mb={4}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="md">
            {`Order By: ${selectedSort?.label || "Relevence"}`}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {sortOrders.map((sortItem) => (
            <MenuItem
              key={sortItem.label}
              value={sortItem.value}
              onClick={() => setSelectedSort(sortItem)}
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
