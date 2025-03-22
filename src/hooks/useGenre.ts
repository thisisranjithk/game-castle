import useGeners from "./useGeners";

const useGenre = (id?: number) => {
  const { data: genres } = useGeners();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
