"use strict"

// header
let navigation = document.getElementById("navigation")
let burger = document.getElementById("burger");

burger.addEventListener("click", function(){
    navigation.classList.toggle("activeNav");
    burger.classList.toggle("active-burger");
});


// form
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let buttonAdd = document.querySelector(".button-add");
let buttonClear = document.querySelector(".button-clear");
let list = document.querySelector(".list");


form.addEventListener("submit", function(event){
    event.preventDefault();
    
// create and add item
    let inputVal = input.value;
    if(inputVal == " "){
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputVal;
    list.appendChild(li);

// clear input
    input.value = " ";

// remove item
    let buttonRemove = document.createElement("button");
    buttonRemove.textContent = "remove";
    buttonRemove.classList.add("margin");
    li.appendChild(buttonRemove);
    buttonRemove.addEventListener("click", function(){
        li.remove();
    });

});

buttonClear.addEventListener("click", function(){
    list.innerHTML = " ";
});



