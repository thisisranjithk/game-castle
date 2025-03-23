import APIClient from "@/services/api-client";
import { Game } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");
const useGame = (slug?: string) => {
  return useQuery({
    queryKey: ["gameDetails", slug],
    queryFn: () => apiClient.get(slug || ""),
    staleTime: 24 * 60 * 60 * 100,
    refetchOnWindowFocus: false,
  });
};

export default useGame;
