import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      gap={"2.5"}
      alignItems={"center"}
      height={"10vh"}
      justifyContent={"space-between"}
    >
      <HStack>
        <Image src={logo} alt="logo" boxSize="50px"></Image>
        <Text>Game Castle</Text>
      </HStack>
      <HStack>
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="sm">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>
      </HStack>
    </Flex>
  );
}

export default Navbar;
