import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaLinux,
    FaApple,
    FaAndroid
  } from "react-icons/fa6";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/UseGame"
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIcon = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        pc: FaWindows,
        mac: FaApple,
        nintendo: BsNintendoSwitch,
        android: FaAndroid,
        web: BsGlobe
    }

  return (
    <HStack paddingY={'10px'}>
    {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.400' />)}
    </HStack>
  )
}

export default PlatformIcon