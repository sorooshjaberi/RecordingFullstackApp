import axios, { AxiosResponse } from "axios";
import { myAxios } from "../axios/axiosConfig";

export const fetchAllSongs = (): Promise<AxiosResponse<{ name: string }[]>> => {
  return myAxios.get<{ name: string }[]>("songs");
};
