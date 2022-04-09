// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace HttpBin {
    /**
     * NewIP
     * @param {string} IP
     */
    export type IP = string

    export type model = {
        args: string[]
        headers: {
            Accept: string
            Host: string
            'User-Agent': string
            'X-Amzn-Trace-Id': string
        }
        origin: IP
        url: string
    }

    export const NewIP = (ip: string): IP => ip

    export type getResponse = {
        httpbin: HttpBin.model
        err: Error
    }
    export interface Repository {
        get(): Promise<getResponse>
    }
}
