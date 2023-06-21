const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const ipcEvents = require('./ipcEvents.js');

const createWindow = () => {
  // 创建浏览窗口
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载 index.html
  //mainWindow.loadFile('./dist/index.html');
  mainWindow.loadURL('http://test.icoderun.com:2225/')

  // 打开开发工具
  mainWindow.webContents.openDevTools();

  mainWindow.maximize();
  mainWindow.show();
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();

  ipcEvents.forEach(eventItem => {
    ipcMain.on(eventItem.name, eventItem.callback);
  })
  
  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态, 
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})