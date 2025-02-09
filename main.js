const { app, BrowserWindow } = require('electron');
const crypto = require('crypto');


const isBot = false

function makeElectronApp() {

    let win;
    
    function createWindow() {
      win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
      });
    
      // Initially load the first HTML file
      win.loadFile('index.html');
    
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
}

function handleBotConnection() {

  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });

  console.log(publicKey)
  console.log(privateKey)

  const timestamp = Date.now().toString();
  const signer = crypto.createSign('SHA256');
  signer.update(timestamp);
  const signature = signer.sign(privateKey, 'base64');

  fetch('http://localhost:3001/', {
    headers: {
      'x-public-key': 'your-bot-id',
      'x-signature': signature,
      'x-timestamp': timestamp
    }
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
}

if (isBot) {
  makeElectronApp()
} else {
  handleBotConnection()
}