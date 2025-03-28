import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box width="full" height="full" textAlign="center" mt="5rem">
      <Spinner />
    </Box>
  );
};

export default Loader;
