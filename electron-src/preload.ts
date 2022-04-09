import { ipcRenderer, IpcRenderer } from 'electron'

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface Global {
            ipcRenderer: IpcRenderer
        }
    }
}

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
    global.ipcRenderer = ipcRenderer
})
