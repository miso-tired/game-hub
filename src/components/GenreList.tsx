import { HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/UseGenre";
import OptimizedImage from "../hooks/image_url";

export interface Props {
  onSelectedGenre: (genre: Genre) => void;
  highlightedGenre: Genre | null
}

const GenreList = ({ onSelectedGenre, highlightedGenre }: Props) => {
  const { data, loading, error } = useGenre();

  if (error) return null;

  if (loading) return <Spinner />

  return (
    <>
    <Heading fontSize='2xl' marginBottom='10px'>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              marginY="5px"
              borderRadius="10px"
              boxSize="40px"
              src={OptimizedImage(genre.image_background)}
              objectFit='cover'
            />
            <Button textAlign='left' whiteSpace='normal' fontWeight={genre.id === highlightedGenre?.id ? 'bold' : 'normal'} variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  </>
  );
};

export default GenreList;
