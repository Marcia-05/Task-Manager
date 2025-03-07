const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

let tasks = [];

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add(task.completed ? "completed" : "pending");
        li.textContent = task.text;
        li.addEventListener("click", () => toggleCompletion(index));
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            removeTask(index);
        });
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
