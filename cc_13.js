// Task 2: Employee Cards Dynamic Addition //
function addEmployee(name, position) {
const employeeCard = document.createElement("div");// Created a new div for the employee card
employeeCard.setAttribute("class", "employee-card"); // Added class
    
employeeCard.innerHTML = `
    <h3 class="employee-name">${name}</h3>
    <p class="employee-position">${position}</p>
    <button class="edit-btn">Edit</button>
    <button class="remove-btn">Remove</button>`}; // Populated the employee card with name, position, and buttons

// Task 3: Bulk Update on Employee Cards //

function highlightEmployeeCards() {
const employeeCards = document.querySelectorAll(".employee-card"); // all employee cards
const employeeCardsArray = [...employeeCards];
employeeCardsArray.forEach(card => { // applyed styling
card.style.border = "2px solid blue";   // blue
card.style.backgroundColor = "#f0f8ff";});} // blue
