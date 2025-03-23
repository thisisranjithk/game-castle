import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useGameScreenshots = (id: string) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["gameScreenshots"],
    queryFn: apiClient.getAll,
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGameScreenshots;
