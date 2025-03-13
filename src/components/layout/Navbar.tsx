import { Flex, Text } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import SearchInput from "../common/SearchInput";

interface Props {
  setSearchValue: (value: string) => void;
}

function Navbar({ setSearchValue }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      gap={"2.5"}
      alignItems={"center"}
      height={"10vh"}
      justifyContent={"space-between"}
    >
      <Text hideBelow="md" fontSize="4xl" fontFamily={"Spicy Rice"}>
        Game Castle
      </Text>
      <Flex
        width={{
          base: "full",
          md: "auto",
        }}
        gapX={5}
      >
        <SearchInput setSearchValue={setSearchValue} />
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
