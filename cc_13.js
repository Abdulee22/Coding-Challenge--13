// Task 2: Employee Cards Dynamic Addition //
function addEmployee(name, position) {
const employeeCard = document.createElement("div");// Created a new div for the employee card
employeeCard.setAttribute("class", "employee-card"); // Added class
    
employeeCard.innerHTML = `
    <h3 class="employee-name">${name}</h3>
    <p class="employee-position">${position}</p>
    <button class="edit-btn">Edit</button>
    <button class="remove-btn">Remove</button>`; }// Populated the employee card with name, position, and buttons
    