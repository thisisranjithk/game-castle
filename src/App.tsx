import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/Games/GameGrid";
import GameHeading from "./components/Games/GameHeading";
import PlatformSelector from "./components/Games/PlatformSelector";
import SortSelector from "./components/Games/SortSelector";
import GenreList from "./components/Genre/GenreList";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={5}>
        <Navbar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg" padding={5}>
        <GenreList />
      </GridItem>

      <GridItem area="main" padding={5}>
        <GameHeading />
        <HStack>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
