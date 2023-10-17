import axios, {type AxiosRequestConfig, type AxiosResponse } from "axios";

export function Axios<TYPE>(params: AxiosRequestConfig) {
    return axios({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_ENTRY_POINT,
        ...params
    }).then((response: AxiosResponse<TYPE>) => response.data);
}