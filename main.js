const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create a new browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Allow Node.js features in the renderer process
    }
  });

  // Load the index.html file
  win.loadFile('index.html');

  // Open the DevTools (optional)
  win.webContents.openDevTools();
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // Quit the app when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});

// For macOS: re-create the window when clicking the app icon in the dock
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
