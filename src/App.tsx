import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
      <GridItem area='sidebar' bg='red'>Sidebar</GridItem>
      </Show>
      <GridItem area='main' bg='orange'>Main</GridItem>
    </Grid>
  )
}

export default App