import useGeners from "@/hooks/useGeners";

const GenreList = () => {
  const { genres, error, isLoading } = useGeners();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
