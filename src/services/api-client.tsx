import { FetchResponse } from "@/utils/interfaces";
import axios, { AxiosRequestConfig } from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_APP_RAWG_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return AxiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(
      (res) => res.data
    );
  };

  get = (id: number | string) => {
    return AxiosInstance.get<T>(this.endpoint + "/" + id).then(
      (res) => res.data
    );
  };

  getTrailer = (id: number | string) => {
    return AxiosInstance.get<T>(this.endpoint + "/" + id + "/movies").then(
      (res) => res.data
    );
  };
}

export default APIClient;
