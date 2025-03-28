import { Box, Text } from "@chakra-ui/react";
import { CgUnavailable } from "react-icons/cg";

export const IconErrorFallback = ({ error }: { error: unknown }) => {
  let errorMessage = "Error Loading Icons";

  if (error instanceof Error) {
    console.log(error.message);
  }

  return <Text>{errorMessage}</Text>;
};

export const GameTailerFallback = ({ error }: { error: unknown }) => {
  let errorMessage = "Trailer Not Available";

  if (error instanceof Error) {
    console.log(error.message);
  }

  return (
    <Box
      boxSize="fit"
      borderRadius={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      flexDirection="column"
      border="1px solid grey"
      pt={{
        base: 5,
        md: 10,
        lg: "20",
      }}
    >
      <CgUnavailable size={"7rem"} color="grey" />
      <Text
        mb={{
          base: 5,
          md: 10,
          lg: "20",
        }}
      >
        {errorMessage}
      </Text>
    </Box>
  );
};
