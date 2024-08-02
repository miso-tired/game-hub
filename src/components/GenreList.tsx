import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/UseGenre";
import OptimizedImage from "../hooks/image_url";

const GenreList = () => {
  const { data, loading, error } = useGenre();

  if (error) return null;

  if (loading) return <Spinner />

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              marginY="5px"
              borderRadius="10px"
              boxSize="40px"
              src={OptimizedImage(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
