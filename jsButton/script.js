const btn = document.querySelector(".btn");
const number = document.querySelector(".number");

let count = 0;
 btn.addEventListener('click', ()=>{
    count++;
    number.textContent = count;
 })