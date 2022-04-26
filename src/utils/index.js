

// handle header on mobile device

let menuBarElement = document.getElementById("menu__bar");
let menuLayerElement = document.getElementById("menu__layer");
let menuContainerElement = document.getElementById("menu__container");
let btnCloseMenu = document.getElementById("menu__layer-close");

menuBarElement.addEventListener("click",function() {
    menuLayerElement.classList.add("active");
    menuContainerElement.classList.add("active-in-mobile");
})

btnCloseMenu.addEventListener("click",function() {
    menuLayerElement.classList.remove("active");
    menuContainerElement.classList.remove("active-in-mobile");
})


