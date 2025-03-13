import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import GameGrid from "./components/layout/GameGrid";
import GenreList from "./components/Genre/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGeners";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        <GenreList
          setSelectedGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="main" padding={5}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
