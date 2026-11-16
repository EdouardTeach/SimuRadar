'use strict';

const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('node:path');
const { startContentServer } = require('./content-server');

let server;
let serverOrigin;
let mainWindow;
const contentRoot = path.join(__dirname, 'app');

function makeMenu() {
  const template = [
    { label: 'Fichier', submenu: [
      { label: 'Ouvrir le simulateur', click: () => mainWindow?.loadURL(`${serverOrigin}/index.html`) },
      { label: 'Ouvrir le générateur', click: () => mainWindow?.loadURL(`${serverOrigin}/generator.html`) },
      { type: 'separator' }, { role: 'quit', label: 'Quitter' }
    ] },
    { label: 'Affichage', submenu: [
      { role: 'reload', label: 'Recharger' }, { role: 'toggledevtools', label: 'Outils de développement' },
      { type: 'separator' }, { role: 'togglefullscreen', label: 'Plein écran' }
    ] }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

async function createWindow() {
  const local = await startContentServer(contentRoot);
  server = local.server;
  serverOrigin = local.origin;
  makeMenu();
  mainWindow = new BrowserWindow({
    width: 1280, height: 820, minWidth: 800, minHeight: 560,
    title: 'SimuRadar', autoHideMenuBar: false,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith(serverOrigin + '/')) return { action: 'allow' };
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (url.startsWith(serverOrigin + '/')) return;
    event.preventDefault();
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
  });
  await mainWindow.loadURL(`${serverOrigin}/index.html`);
}

app.whenReady().then(createWindow).catch(err => { console.error(err); app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on('before-quit', () => { if (server) server.close(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
