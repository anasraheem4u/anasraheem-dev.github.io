const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");

function addTask() {
  const task = newTaskInput.value; 
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);
    newTaskInput.value = "";
  }
}

newTaskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
