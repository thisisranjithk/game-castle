import useGameQuery from "@/store";
import { Input, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useDebouncedCallback } from "use-debounce";
import { InputGroup } from "../ui/input-group";

const SearchInput = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setSearchText(value);
    },
    // delay in ms
    800
  );

  return (
    <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
      <Input
        placeholder="Search games..."
        type="text"
        onChange={(e) => debounced(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
