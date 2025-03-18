import { Input, Kbd } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  setSearchValue: (value: string) => void;
}

const SearchInput = ({ setSearchValue }: Props) => {
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setSearchValue(value);
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
