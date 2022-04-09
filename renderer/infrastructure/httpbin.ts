import { AXIOS } from './axios'
import * as entity from '../entity'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace HttpBin {
    export class Repository implements entity.HttpBin.Repository {
        // eslint-disable-next-line class-methods-use-this
        async get(): Promise<entity.HttpBin.getResponse> {
            try {
                const res =
                    await AXIOS.NewClient.instance.get<entity.HttpBin.model>(
                        '/get'
                    )
                return {
                    httpbin: res.data,
                    err: null,
                }
            } catch (e: unknown) {
                if (e instanceof Error) {
                    return {
                        httpbin: null,
                        err: e,
                    }
                }
                return {
                    httpbin: null,
                    err: Error('unknown err'),
                }
            }
        }
    }
}
