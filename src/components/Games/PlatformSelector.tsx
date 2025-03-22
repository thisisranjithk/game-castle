import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQuery from "@/store";
import { Box, Button } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameQuery((s) => s.setPlatformId);
  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  if (error) return null;
  return (
    <Box mb={4}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="md">
            {platform?.name || "Platforms"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => setPlatformId(platform?.id)}
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
