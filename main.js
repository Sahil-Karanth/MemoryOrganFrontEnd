const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create a new browser window with the menu bar hidden
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Allow Node.js features in the renderer process
    },
    autoHideMenuBar: true, // Hide the menu bar by default
  });

  // Load the index.html file
  win.loadFile('index.html');
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
