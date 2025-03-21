import { useQuery } from "@tanstack/react-query";
import { Platform } from "@/utils/interfaces";
import { platforms } from "@/utils/constants";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    initialData: { count: platforms.length, next: null, results: platforms },
  });

export default usePlatforms;
