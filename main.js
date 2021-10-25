const { app, BrowserWindow } = require("electron");

let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 400,
        height: 700,
        x: 970,
        y: 100,
        title: "Angular and Electron",
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    appWin.loadURL(`file:///${__dirname}/dist/Tekus-technical-test/index.html`);
    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});