// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// Section 4: Functions and Event Listeners
// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault(); // this function stops our form from reloading the page
    
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    
    // TODO: Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }
    
    // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });
    
    // Clear the form
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDeadline').value = '';
    
    render();
}

// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the array
    const tbody = taskTable.querySelector('tbody');
    tbody.innerHTML = tasks.map((task, index) => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button class="complete-btn" onclick="markTaskComplete(${index})">Complete</button></td>
            <td><button class="remove-btn" onclick="removeTask(${index})">Remove</button></td>
        </tr>
    `).join('');
}

// Function to mark task as complete
function markTaskComplete(index) {
    alert(`Task "${tasks[index].name}" marked as complete!`);
    // You could add functionality here to change the task's appearance or status
}

// Function to remove task
function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

// Function to initialize the table
function init() {
    const tbody = taskTable.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = ''; // Clear the table body
    }
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();
