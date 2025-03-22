import Navbar from "@/components/layout/Navbar";
import { Button, Flex, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const pageNotFound = isRouteErrorResponse(error);
  return (
    <>
      <Navbar />
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={3}
        height="90vh"
      >
        <Text fontSize="4xl" fontWeight="bold">
          Oops
        </Text>
        <Text fontSize="lg">
          {pageNotFound ? "Page Not Found" : "Error : Something went wrong"}
        </Text>
        {pageNotFound && (
          <Link to="/">
            <Button mt={5}>Back to Home</Button>
          </Link>
        )}
      </Flex>
    </>
  );
};

export default ErrorPage;
