import { Input, Kbd } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";

interface Props {
  setSearchValue: (value: string) => void;
}

const SearchInput = ({ setSearchValue }: Props) => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
      <Input
        placeholder="Search games..."
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
