declare module 'electron-next' {
    interface Directories {
        production: string
        development: string
    }

    export default function (
        // eslint-disable-next-line no-unused-vars
        directories: Directories | string,
        // eslint-disable-next-line no-unused-vars
        port?: number
    ): Promise<void>
}
