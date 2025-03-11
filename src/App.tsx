import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import GameGrid from "./components/layout/GameGrid";

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
        aside
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
