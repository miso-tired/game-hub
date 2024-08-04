import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from './hooks/UseGenre'
import PlatfromSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/UseGame";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"navbar" "main"`,
        lg: `"navbar navbar" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="navbar">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" paddingX="10px">
          <GenreList highlightedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatfromSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
