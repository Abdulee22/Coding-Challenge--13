// Task 2: Employee Cards Dynamic Addition //
function addEmployee(name, position) {
const employeeCard = document.createElement("div");// Created a new div for the employee card
employeeCard.setAttribute("class", "employee-card"); // Added class
    
employeeCard.innerHTML = `
    <h3 class="employee-name">${name}</h3>
    <p class="employee-position">${position}</p>
    <button class="edit-btn">Edit</button>
    <button class="remove-btn">Remove</button>`; // Populated the employee card with name, position, and buttons

// Task 3: Bulk Update on Employee Cards //

function highlightEmployeeCards() {
const employeeCards = document.querySelectorAll(".employee-card"); // all employee cards
const employeeCardsArray = [...employeeCards];
employeeCardsArray.forEach(card => { // applyed styling
card.style.border = "2px solid blue";   // blue
card.style.backgroundColor = "#f0f8ff";});} // blue

// Task 4: Implementing Removal of Employee Cards with Event Bubbling //

employeeContainer.addEventListener("click", (event) => {
 if (event.target.classList.contains("employee-card")) {
console.log("Employee card clicked:", event.target.querySelector(".employee-name").innerText);}});// Attach a click event listener to the employee container
    
employeeContainer.appendChild(employeeCard);// Appended the employee card 
    
const removeButton = employeeCard.querySelector(".remove-btn");
removeButton.addEventListener("click", (event) => {// Attach event listener for removing the employee card
event.stopPropagation(); // Prevent event from bubbling up
employeeContainer.removeChild(employeeCard);}); // Remove employee card
     
const editButton = employeeCard.querySelector(".edit-btn");
editButton.addEventListener("click", () => enableEditing(employeeCard));} // Attached event listener for inline editing
 
// Task 5: Inline Editing of Employee Details //

function enableEditing(employeeCard) {
const nameElement = employeeCard.querySelector(".employee-name");
const positionElement = employeeCard.querySelector(".employee-position"); // Selected name and position
    
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.value = nameElement.innerText; 

const positionInput = document.createElement("input");
positionInput.type = "text";
positionInput.value = positionElement.innerText;  // Created input fields for editing
    
const saveButton = document.createElement("button");
saveButton.innerText = "Save";
saveButton.classList.add("save-btn"); // Save button
    
        
employeeCard.innerHTML = "";
employeeCard.appendChild(nameInput);
employeeCard.appendChild(positionInput);
employeeCard.appendChild(saveButton); // Input fields
    
        
saveButton.addEventListener("click", () => {
nameElement.innerText = nameInput.value;
positionElement.innerText = positionInput.value;  // Attach event listener for saving changes
    
employeeCard.innerHTML = `
    <h3 class="employee-name">${nameInput.value}</h3>
    <p class="employee-position">${positionInput.value}</p>
    <button class="edit-btn">Edit</button>
    <button class="remove-btn">Remove</button> `; // Setting inner HTML
    
employeeCard.querySelector("edit-btn").addEventListener("click", () => enableEditing(employeeCard));
employeeCard.querySelector("remove-btn").addEventListener("click", (event) => {
event.stopPropagation();
employeeContainer.removeChild(employeeCard);})});} // Added event listeners for edit and remove functionality
    
    // Sample Data for Testing //
    
    addEmployee("Lionel Messi", "Right Winger");
    addEmployee("Cristiano Ronaldo","Forward");
    