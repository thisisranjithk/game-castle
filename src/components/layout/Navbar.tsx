import { useColorMode } from "@/components/ui/color-mode";
import { ClientOnly, Flex, IconButton, Skeleton, Text } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import SearchInput from "../common/SearchInput";
import { Link } from "react-router-dom";

function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      gap={"2.5"}
      alignItems={"center"}
      height={"10vh"}
      justifyContent={"space-between"}
      marginX={5}
    >
      <Link to="/">
        <Text hideBelow="md" fontSize="4xl" fontFamily={"Spicy Rice"}>
          Game Castle
        </Text>
      </Link>
      <Flex
        width={{
          base: "full",
          md: "auto",
        }}
        gapX={5}
      >
        <SearchInput />
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="md">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>
      </Flex>
    </Flex>
  );
}

export default Navbar;
