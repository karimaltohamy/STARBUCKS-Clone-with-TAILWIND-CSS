let btn = document.querySelector('.btn');
let menuMobil = document.querySelector(".menu-mobil")

btn.addEventListener("click", (e)=> {
    btn.classList.toggle("not-active")
    btn.classList.toggle("active")
    menuMobil.classList.toggle("translate-x-full")
});

// btn col footer
let btnCols = document.querySelectorAll(".btn-col");
let colFooters= document.querySelectorAll(".col-footer");
let arrowDown = document.querySelectorAll(".arrow-down")

btnCols.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.toggle("active");
        e.target.nextElementSibling.classList.toggle("max-h-0");
        e.target.lastElementChild.classList.toggle("active")
    })
})