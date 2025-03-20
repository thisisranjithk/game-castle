import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/utils/interfaces";
import { Box, Button } from "@chakra-ui/react";

interface Props {
  setSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Box mb={4}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="md">
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => setSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
