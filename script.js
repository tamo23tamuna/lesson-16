"use strict"

let navigation = document.getElementById("navigation")
let burger = document.getElementById("burger");

burger.addEventListener("click", function(){
    navigation.classList.toggle("activeNav");
    burger.classList.toggle("active-burger");
});
