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
let result;

function clearr () {
    numbers = "";
    screen.textContent= numbers;
}

clear.addEventListener('click', ()=> {
    clearr();
});

remove.addEventListener('click', ()=> {
    screen.textContent= numbers=numbers.substring(0,numbers.length-1);
});

numButtons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        let input =  e.target.textContent
        if (numbers.length <9){
            numbers +=  input
             screen.textContent=numbers;}
   
    })
    
});
operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (numbers === "") return;
        if (numbers.length >=9)return ;
        const lastChar = numbers[numbers.length - 1];
        if ("+-*/".includes(lastChar)) return;

        const parts = numbers.split(/(\+|\-|\*|\/)/);

        if (parts.length >= 3) {
            const num1 = Number(parts[0]);
            const op = parts[1];
            const num2 = Number(parts[2]);

            let result;

            if (op === "+") result = add(num1, num2);
            else if (op === "-") result = subtract(num1, num2);
            else if (op === "*") result = multiply(num1, num2);
            else if (op === "/") result = divide(num1, num2);

            

            if (typeof result ==='number') {
                result = parseFloat(result.toFixed(3))
            }

            numbers = result.toString() + e.target.textContent;
            
        } else {
            
            numbers += e.target.textContent;
        }
        
        screen.textContent = numbers;
    });
});

dot.addEventListener("click", (e)=> {
    if (numbers === "") return;
        if (numbers.length >=9)return ;
        const lastChar = numbers[numbers.length - 1];
        if (".".includes(lastChar)) return;

        const parts = numbers.split(/(\+|\-|\*|\/)/);
        const currentNumber =parts[parts.length-1];
        if (currentNumber.includes("."))return;


    let deci = e.target.textContent;
    numbers = numbers + deci


            screen.textContent = numbers;
        
})

equal.addEventListener("click",()=>{
    const parts = numbers.split(/(\+|\-|\*|\/)/);


    if (parts.length >= 3) {
        const num1 = Number(parts[0]);
        const op = parts[1];
        const num2 = Number(parts[2]);

        if (!isNaN(num1)&&!isNaN(num2)){
            calculate()
        }
    }
  
     
} );

function calculate(){

    const parts = numbers.split(/((?:\+|-|\*|\/))/);
    const validParts = parts.filter(part => part !== "");

    
    if (validParts.length < 3) return;

    let num1, op, num2;

    if (validParts[0] === "-") {
        num1 = -Number(validParts[1]);
        operator = validParts[2];
        num2 = Number(validParts[3]);

    } else {
        num1 = Number(validParts[0]);
        operator = validParts[1];
        num2 = Number(validParts[2]);
    }
 

    if (operator === "+") {
        result = add (num1,num2);
    } else if (operator === "-"){
        result = subtract (num1,num2);
    }
    else if (operator === "*"){
        result = multiply (num1,num2);
    }else if (operator === "/"){
        if (num2 === 0) {
            result = "ERROR!";
            setTimeout(clearr, 2500);
        }else {
          result = divide (num1,num2);  
        } 
    }
    
    if (typeof result ==='number') {
        result = parseFloat(result.toFixed(3))
    }


    numbers = result.toString();
    if (numbers.length >=9) {
        numbers = numbers.slice(0, 9);
    };
    screen.textContent = numbers;

}