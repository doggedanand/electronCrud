
// Modules
const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Create a new BrowserWindow when `app` is ready
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("index.html");

  // Open DevTools - Remove for PRODUCTION!
  mainWindow.webContents.openDevTools();

  // Listen for window being closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Electron `app` is ready
app.on("ready", createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});



 
const nameInput = document.createElement("input");
nameInput.classList.add("form-control");

const ageInput = document.createElement("input");
ageInput.classList.add("form-control");

const addButton = document.createElement("button");
addButton.textContent = "Add User";
addButton.classList.add("btn");
addButton.classList.add("btn-primary");

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete User";
deleteButton.classList.add("btn");
deleteButton.classList.add("btn-danger");

const updateButton = document.createElement("button");
updateButton.textContent = "Update User";
updateButton.classList.add("btn");
updateButton.classList.add("btn-secondary");

window.document.body.appendChild(nameInput);
window.document.body.appendChild(ageInput);
window.document.body.appendChild(addButton);
window.document.body.appendChild(deleteButton);
window.document.body.appendChild(updateButton);

 
function updateUsersTable() {
  
  usersTable.querySelector("tbody").innerHTML = "";

   
  database.users.forEach((user, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = user.age;
    row.appendChild(ageCell);

    usersTable.querySelector("tbody").appendChild(row);
  });
}
 
 
