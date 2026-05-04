const addBtn = document.querySelector(".addBtn");
const subBtn = document.querySelector(".subBtn");
const add2Btn = document.querySelector(".add2Btn");
const sub2Btn = document.querySelector(".sub2Btn");
const number = document.querySelector(".number");
const reset = document.querySelector(".resetBtn");

let count = 0;
addBtn.addEventListener('click', ()=>{
    count++;
    number.textContent = count;
})

subBtn.addEventListener('click', ()=>{
    count--;
    number.textContent = count;
})

// add2Btn.addEventListener('click', ()=>{
//     count = count + 2;
//     number.textContent = count;
// })

// sub2Btn.addEventListener('click', ()=>{
//     count = count - 2;
//     number.textContent = count;
// })

reset.addEventListener('click', ()=>{
    count = 0;
    number.textContent = count;
}) 