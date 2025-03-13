export const IconErrorFallback = ({ error }: { error: unknown }) => {
  let errorMessage = "Error Loading Icons";

  if (error instanceof Error) {
    console.log(error.message);
  }

  return <div>{errorMessage}</div>;
};
