const numbtn = document.getElementsByClassName("numbtn");
const display = document.querySelector(".header");
const opr = document.getElementsByClassName("opr");

let calArray = [];
let calHolder = [];
let number = 0;
let result = 0;





document.querySelector(".deletebtn").addEventListener("click", function() {
    calArray.pop();
    display.innerHTML = calArray.join("");
});

document.querySelector(".reset").addEventListener("click", function() {
    calArray = [];
    calHolder = [];
    display.innerHTML = calArray.join("");
});



for (let i = 0; i < numbtn.length; i++) {

    numbtn[i].addEventListener("click", function() {
        calArray.push(numbtn[i].innerHTML);
        display.innerHTML = calArray.join("");
        number = calArray.join("");
    });

}

for (let i = 0; i < opr.length; i++) {

    opr[i].addEventListener("click", function() {
        calHolder.push(number);
        calHolder.push(this.innerHTML);
        display.innerHTML = "";
        calArray = [];


    });

}


document.querySelector(".equals").addEventListener("click", function() {
    calHolder.push(number);
    result = eval(calHolder.join(""));
    display.innerHTML = result;

});