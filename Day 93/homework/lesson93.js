const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {

        const taskListItem = document.createElement('li');
        taskListItem.innerHTML = `
            <input type="checkbox" id="task-checkbox">
            <label for="task-checkbox">${task}</label>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskListItem);

        saveTaskToLocalStorage(task);

        taskInput.value = '';
    }
});

clearAllBtn.addEventListener('click', () => {
    taskList.innerHTML = '';

    localStorage.clear();
});

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

window.onload = () => {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => {
        const taskListItem = document.createElement('li');
        taskListItem.innerHTML = `
            <input type="checkbox" id="task-checkbox">
            <label for="task-checkbox">${task}</label>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskListItem);
    });
};