import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamelogo.webp";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
