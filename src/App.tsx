import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid templateAreas={{
      base: `"navbar" "main"`,
      lg: `"navbar navbar" "sidebar main"`
    }}>
      <GridItem area='navbar'>
        <Navbar />
      </GridItem>
      <Show above="lg">
      <GridItem area='sidebar'>Sidebar</GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App