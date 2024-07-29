import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{
      base: `"navbar" "main"`,
      lg: `"navbar navbar" "sidebar main"`
    }}>
      <GridItem area='navbar' bg='gray'>Navbar</GridItem>
      <Show above="lg">
      <GridItem area='sidebar' bg='red'>Sidebar</GridItem>
      </Show>
      <GridItem area='main' bg='orange'>Main</GridItem>
    </Grid>
  )
}

export default App