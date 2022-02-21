const primary = document.querySelector(".primary-display");
const secondary =document.querySelector(".secondary-display");
const buttons =document.querySelector("#buttons");

let operator ="";
let firstNumber="";
let isPrevOperator = false;

function calculate(){
    switch (operator2){
        case "+":
            return Number(firstNumber) + Number(primary.innerHTML);
        case "—":
            return Number(firstNumber) - Number(primary.innerHTML);
        case "x":
            return Number(firstNumber) * Number(primary.innerHTML);
        case "÷":
            return Number(firstNumber) / Number(primary.innerHTML);
    }
}
buttons.addEventListener("click", (event) =>{
    if(!event.target.classList.contains("button")) return;

    let primaryValue = primary.innerHTML;
    let buttonValue = event.target.innerHTML;

    if (event.target.classList.contains("ac")){
        operator2 ="";
        firstNumber="";
        primary.innerHTML = "0";
        secondary.innerHTML = "";
    }

    if (event.target.classList.contains("number")){
        if(primaryValue.length < 7)
          if(primaryValue !== "0"){
              primary.innerHTML +=buttonValue;
          }else if(buttonValue !== "0"){
              primary.innerHTML = buttonValue;
          }
    }

    if(event.target.classList.contains("minus")){
      if(primaryValue[0]== "-")
        primary.innerHTML = primaryValue.substring(1);
      else if(primaryValue.length < 7 && primaryValue !== "0")
        primary.innerHTML = "-" +primaryValue;
        
    }

    if(event.target.classList.contains("point")){
        if(!primaryValue.includes(".")){
            primary.innerHTML += ".";
        }
    }

    if(event.target.classList.contains("operator2")){
        if(!isPrevOperator){
            if(secondary.innerHTML && operator2){
                firstNumber =calculate();
            } else firstNumber =primaryValue;
            primary.innerHTML = "0";
        }
        operator2 = buttonValue;
        secondary.innerHTML = firstNumber + " " + operator2;
        isPrevOperator = true;

    }else isPrevOperator = false;


    if(event.target.classList.contains("equal")){
        firstNumber = calculate();
        operator2 = "";
        secondary.innerHTML =firstNumber;
        primary.innerHTML ="0";
        isPrevOperator =true;
        console.log(primary);
    }
});