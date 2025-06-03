const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "✕";
  removeBtn.onclick = () => {
    taskItem.style.opacity = "0";
    taskItem.style.transform = "translateX(20px)";
    setTimeout(() => taskItem.remove(), 300);
  };

  taskItem.appendChild(taskContent);
  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskInput.focus();
});
