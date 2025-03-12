import useGeners from "@/hooks/useGeners";

const GenreList = () => {
  const { data } = useGeners();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
