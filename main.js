const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Set to true for better security in production
    }
  });

  // Initially load the first HTML file
  win.loadFile('index.html');

  // Uncomment the following to switch to the second HTML file after a timeout (just for demonstration)
  // setTimeout(() => {
  //   win.loadFile('secondPage.html');
  // }, 5000); // Switch after 5 seconds
}

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
