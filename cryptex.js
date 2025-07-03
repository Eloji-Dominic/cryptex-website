'use strict';

// add event on element
const addEventonElem = function(elem, type, callback){
  if(elem.length > 1){
    for(let i = 0; i < elem.length; i++){
      elem[i].addEventListener(type, callback);
    }
  }else{elem.addEventListener(type, callback);}
}

// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelector("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function(){
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}
addEventonElem(navToggler, "click", toggleNavbar);

const closeNavbar = function(){
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}
addEventonElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");
const activeHeader = function(){
  if(window.scrollY > 300){
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  };
}
addEventonElem(window, "scroll", activeHeader);

// Toggle active to add to favs
const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");
const toggleActive = function(){
  this.classList.toggle("active");
}
addEventonElem(addToFavBtns, "click", toggleActive);

const sections = document.querySelectorAll("[data-section]");
const scrollReveal = function(){
  sections.forEach((section) => {
    if(section.getBoundingClientRect().top < window.innerHeight / 1.5){
      section.classList.add("active");
    }else{
      section.classList.remove("active");
    }
  })
}
scrollReveal();
addEventonElem(window, "scroll", scrollReveal);
