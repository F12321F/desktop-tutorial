const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // 建立瀏覽器視窗
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    // 隱藏預設的選單列以符合遊戲的沉浸感
    autoHideMenuBar: true, 
    title: "神秘塔羅牌占卜"
  });

  // 載入我們之前寫好的塔羅牌網頁遊戲
  // 請確保原本的 tarot-game.html 已重新命名為 index.html，或是修改下方的檔名
  win.loadFile('index.html');
}

// 當 Electron 完成初始化並準備好建立瀏覽器視窗時呼叫
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // 在 macOS 上，當點擊 dock 圖示且沒有其他視窗開啟時，
    // 通常會重新建立一個視窗。
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 當所有視窗都關閉時結束程式，除了 macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
