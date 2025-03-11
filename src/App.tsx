import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="yellow">
        nav
      </GridItem>

      <GridItem area="aside" bg="red" hideBelow="lg">
        aside
      </GridItem>

      <GridItem area="main" bg="lavender">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
