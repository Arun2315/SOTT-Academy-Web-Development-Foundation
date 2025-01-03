let burger = document.querySelector(".burger");
let links = document.querySelector(".navigation");
let text = document.querySelector(".text-center")

burger.addEventListener('click',()=>{
    links.classList.toggle("navigation-click");
    text.classList.toggle("textscrollhide");
  
})