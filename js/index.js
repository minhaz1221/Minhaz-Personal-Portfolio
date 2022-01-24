// Welcome To JavaScript

var mini_img = document.querySelector(".header-section ul li:first-child");
var nav_info_section = document.querySelector(".nav-info-section");
var nav_menu_section = document.querySelector(".nav-menu-section");
var nav_bar = document.querySelector(".header-section ul li:last-child");


var extend = true;
mini_img.addEventListener("click", function(){
    if (extend == true){
        nav_info_section.style.display = "block";
        extend = false;
    }
    else if(extend == false) {
        nav_info_section.style.display = "none";
        nav_menu_section.style.display = "none";
        extend = true;
    }
});

nav_bar.addEventListener("click", function(){
    if (extend == true){
        nav_menu_section.style.display = "block";
        nav_bar.classList.add("cross-background");
        extend = false;
    }
    else if(extend == false) {
        nav_menu_section.style.display = "none";
        nav_info_section.style.display = "none";
        nav_bar.classList.remove("cross-background");
        extend = true;
    }
});