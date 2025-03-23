import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface GameTrailerResult {
  id: number;
  preview: string;
  data: { 480: string; max: string };
}

interface Trailer {
  id: number;
  name: string;
  results: GameTrailerResult[];
}

const apiClient = new APIClient<Trailer>("/games");
const useGameTrailer = (gameSlug: string) => {
  return useQuery({
    queryKey: ["gameTrailer", gameSlug],
    queryFn: () => apiClient.getTrailer(gameSlug),
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGameTrailer;
