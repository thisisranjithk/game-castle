import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetchResponse, Genre } from "@/utils/interfaces";
import { genres } from "@/utils/constants";

const useGeners = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGeners;
