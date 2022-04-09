import axios, { AxiosInstance } from 'axios'

export type Client = {
    instance: AxiosInstance
}

// FIXME: シングルトンにする
export const NewClient: Client = {
    instance: axios.create({
        baseURL: 'https://httpbin.org',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
    }),
}
