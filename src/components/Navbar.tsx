import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamelogo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={(onSearch)} />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
