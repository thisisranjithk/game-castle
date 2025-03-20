import { Platform } from "@/utils/interfaces";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platfroms: Platform[];
}

const PlatFormIcons = ({ platfroms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <Box>
      <Flex flexDirection={"row"} gap={3} mt={"10px"}>
        {platfroms.map((platfrom) => (
          <Icon key={platfrom.id} as={iconMap[platfrom.slug]}></Icon>
        ))}
      </Flex>
    </Box>
  );
};

export default PlatFormIcons;
