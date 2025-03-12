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
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
