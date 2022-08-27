const maincontainerEl = document.querySelector(".main-container");
const popcontainerEl =  document.querySelector(".pop-container");
const btnEl = document.querySelector(".btn");
const closeiconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click" , ()=> {
    maincontainerEl.classList.add("active");
    popcontainerEl.classList.remove("active");
});

closeiconEl.addEventListener("click" , ()=> {
    maincontainerEl.classList.remove("active");
    popcontainerEl.classList.add("active");
});