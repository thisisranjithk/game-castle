import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <Flex gap={"2.5"} alignItems={"center"} height={"10vh"}>
      <Image src={logo} alt="logo" boxSize="50px"></Image>
      <Text>Game Castle</Text>
    </Flex>
  );
}

export default Navbar;
