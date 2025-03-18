import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetchResponse, Platform } from "@/utils/interfaces";
import { platforms } from "@/utils/constants";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
