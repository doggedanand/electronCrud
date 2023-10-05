// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Import Electron and Bootstrap
const { app, BrowserWindow } = require("electron");
const bootstrap = require("bootstrap");

// Create a new database object
const database = {
  users: [],
};

// Create a new Electron window
const window = new BrowserWindow({
  width: 800,
  height: 600,
});

// Add the necessary UI elements to the Electron window
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

// Update the users table
function updateUsersTable() {
  // Clear the table body
  usersTable.querySelector("tbody").innerHTML = "";

  // Iterate over the users in the database and add them to the table
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

// Start the Electron app
window.loadURL("index.html");
