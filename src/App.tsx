import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import GameGrid from "./components/Games/GameGrid";
import GenreList from "./components/Genre/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGeners";
import PlatformSelector from "./components/Games/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector, { Sort } from "./components/Games/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<Sort | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
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
        <Navbar setSearchValue={setSearchValue} />
      </GridItem>

      <GridItem area="aside" hideBelow="lg" padding={5}>
        <GenreList
          setSelectedGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="main" padding={5}>
        <HStack>
          <PlatformSelector
            setSelectedPlatform={setSelectedPlatform}
            selectedPlatform={selectedPlatform}
          />
          <SortSelector
            setSelectedSort={setSelectedSort}
            selectedSort={selectedSort}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedSort={selectedSort}
          searchValue={searchValue}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
