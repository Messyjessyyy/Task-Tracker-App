const form = document.getElementById('taskForm');
const taskTableBody = document.querySelector('#taskTable tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (!taskName || !taskDescription || !taskDeadline) {
        alert('Please fill in all fields');
        return;
    }

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${taskName}</td>
        <td>${taskDescription}</td>
        <td>${taskDeadline}</td>
        <td><button class="complete">Complete</button></td>
        <td><button class="remove">Remove</button></td>
    `;

    // Complete button
    row.querySelector('.complete').addEventListener('click', () => {
        row.style.textDecoration = row.style.textDecoration === 'line-through' ? '' : 'line-through';
    });

    // Remove button
    row.querySelector('.remove').addEventListener('click', () => {
        row.remove();
    });

    taskTableBody.appendChild(row);

    // Clear form
    form.reset();
});
