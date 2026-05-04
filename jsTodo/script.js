const form = document.querySelector(".todoForm");
const input = document.querySelector(".taskInput");
const taskList = document.querySelector(".taskList");


form.addEventListener("submit", function(e){
    e.preventDefault();

    if(input.value === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function(){
        this.remove();
    };

    taskList.appendChild(li);

    input.value = "";
});  

