import { useQuery } from "@tanstack/react-query";
import { Genre } from "@/utils/interfaces";
import { genres } from "@/utils/constants";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Genre>("/genres");
const useGeners = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGeners;
