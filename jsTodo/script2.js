const inputForm = document.querySelector(".inputForm");
const taskInput = document.querySelector(".inputTask");
const taskList = document.querySelector(".taskList");

inputForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(taskInput.value === "") return;
    let taskText = taskInput.value;

    let li = document.createElement("li");
    
    const text = document.createElement("span");
    text.textContent = taskText;
    const tick = document.createElement("span");
    tick.textContent = "✔️";
    const cross = document.createElement("span");
    cross.textContent = "❌";

    li.appendChild(tick);
    li.appendChild(text);
    li.appendChild(cross);

    
    tick.onclick = function(e){
        e.stopPropagation();
        li.classList.toggle("completed");
    }
    cross.onclick = function(e){
        e.stopPropagation();
        li.remove();
    }

    taskList.appendChild(li);

    taskInput.value = "";

})