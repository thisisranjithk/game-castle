import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import GameGrid from "./components/layout/GameGrid";
import GenreList from "./components/Genre/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg">
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
