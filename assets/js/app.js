
const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");
const selectEl = document.querySelector(".select");
const textEl = document.querySelector(".text"); 

btnEl.addEventListener("click" , (e) => {
    e.preventDefault();
    textEl.innerHTML = eval(inputEl.value * selectEl.value);
});





