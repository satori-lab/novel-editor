// Native
import { join } from 'path'
import { format } from 'url'

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

// Prepare the renderer once the app is ready
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.on('ready', async () => {
    await prepareNext('./renderer')

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: join(__dirname, 'preload.js'),
        },
    })

    const url = isDev
        ? 'http://localhost:8000/'
        : format({
              pathname: join(__dirname, '../renderer/out/index.html'),
              protocol: 'file:',
              slashes: true,
          })

    await mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
// eslint-disable-next-line @typescript-eslint/unbound-method
app.on('window-all-closed', app.quit)

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
    // eslint-disable-next-line no-console
    console.log(message)
    setTimeout(() => event.sender.send('message', 'hi from electron'), 500)
})
