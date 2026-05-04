const inputForm = document.querySelector(".inputForm");
const taskInput = document.querySelector(".inputTask");
const taskList = document.querySelector(".taskList");

inputForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(taskInput.value.trim() === "") return;

    createTask(taskInput.value);
    saveTasks();

    taskInput.value = "";
});


// 🔁 Create Task
function createTask(taskText, isCompleted = false){
    let li = document.createElement("li");

    const tick = document.createElement("span");
    tick.textContent = "✔️";

    const text = document.createElement("span");
    text.textContent = taskText;

    const cross = document.createElement("span");
    cross.textContent = "❌";

    li.appendChild(tick);
    li.appendChild(text);
    li.appendChild(cross);

    // apply completed state
    if(isCompleted){
        li.classList.add("completed");
    }

    // ✅ toggle complete
    tick.onclick = function(e){
        e.stopPropagation();
        li.classList.toggle("completed");
        saveTasks();
    };

    // ❌ delete
    cross.onclick = function(e){
        e.stopPropagation();
        li.remove();
        saveTasks();
    };

    taskList.appendChild(li);
}


// 💾 Save
function saveTasks(){
    const tasks = [];

    document.querySelectorAll(".taskList li").forEach(li => {
        tasks.push({
            text: li.children[1].textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// 📂 Load
function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task.text, task.completed);
    });
}


// 🚀 init
loadTasks();