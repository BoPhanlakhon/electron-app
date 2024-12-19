const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  // สร้างหน้าต่าง
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // เปิดการใช้งาน Node.js ใน Electron (optional)
    },
  });

  // โหลด Next.js server ที่กำลังรันอยู่
  mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);

// การปิดหน้าต่าง
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
