import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/UseGame";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
