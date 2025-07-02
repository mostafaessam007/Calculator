let screen= document.querySelector(".screen")
let remove= document.querySelector("#delete");
let clear= document.querySelector("#clear");
let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal")
let numButtons = document.querySelectorAll(".num-btn")
let operators = document.querySelectorAll(".ope")
const add = function(a,b) {
    let result = a + b;
    return result
    };
    
    
const subtract = function(a,b) {
 let result = a - b;
 return result
 };

 const multiply = function(a,b) {
    let result = a * b;
    return result
    };


const divide = function(a,b) {
let result = a / b;
return result
};

let currentNumber ="";
let num1 = "";
let num2 = "";
let operator="";
let numbers = "";

// function operate(num1,operator, num2) {
// add(a,b)
// }

clear.addEventListener('click', ()=> {
    screen.textContent= numbers = "";
});

remove.addEventListener('click', ()=> {
    screen.textContent= numbers=numbers.substring(0,numbers.length-1);
});

numButtons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        numbers +=  e.target.textContent
        if (numbers.length <=9) {
                    screen.textContent=numbers;

        }
    })
    
});
operators.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if (numbers === "") return;
        if (numbers.length <=9) {
        num1=numbers;
        operator =  e.target.textContent;
        numbers+= operator;
        screen.textContent=numbers;
        }
    })
    
});

equal.addEventListener("click",()=>{
     calculate()
} );

function calculate(){

    const parts = numbers.split(/(\+|\-|\*|\/)/);
    num1=Number(parts[0]);
    operator = parts[1]
    num2=Number(parts[2]);

    let result;

    if (operator === "+") {
        result = add (num1,num2);
    } else if (operator === "-"){
        result = subtract (num1,num2);
    }
    else if (operator === "*"){
        result = multiply (num1,num2);
    }else if (operator === "/"){
        if (num2 === 0) {
            result = "ERROR!"
        }else {
          result = divide (num1,num2);  
        } 
    }
    numbers = result.toString();
    screen.textContent = numbers;

}