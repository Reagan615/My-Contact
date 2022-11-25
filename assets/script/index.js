'use strict';


let btn = document.querySelector('.search button');
let grid = document.querySelector('.grid-container');
let tip = document.querySelector('.msg span');
let items = document.querySelectorAll('.grid-container div');
   
let arr = [];
let arr3 = [];

btn.addEventListener('click', function() {
    let input = document.querySelector('.search input').value.trim();
    let emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
    arr = input.split(',');
    let item = document.createElement('div');
    let items = document.querySelectorAll('.grid-container div');
   
    if (arr.length !== 3) {
        alert("Please enter the correct format")
    } else if (!isNaN(arr[1])) {
        alert("Please enter a correct city name")
    } else if (!emailRegex.test(arr[2])) {
        message += "A valid email is  required";
        alert("A valid email is  required")
    } else {
        for(let i = 0; i < arr.length; i++) {
           arr3.push(arr[i]);
           item.innerHTML = "Name:" + arr[i - 2] +"<br>"+ "City:" + arr[i - 1] + "<br>" + "Email:" + arr[i - 0];
           grid.insertBefore(item, grid.children[0]);
           tip.innerHTML = `There are currently ${arr3.length / 3} contacts`;
        }; 
    }
    /* for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            console.log(i);
            grid.removeChild(grid.items[i]);
    
        });
    }; */
   
});


































