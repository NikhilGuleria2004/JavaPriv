const inputForm = document.querySelector(".inputForm");
const taskInput = document.querySelector(".inputTask");
const taskList = document.querySelector(".taskList");

inputForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(taskInput.value === "") return;

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    li.onclick = function(){
        this.remove();
    };
    
    taskList.appendChild(li);

    taskInput.value = "";

})