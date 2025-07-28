console.log("Conditionals");

// if-statement (condition = y/n?)
// if(condition){
// code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1 == student2){
    console.log("The values are the same");
}

// Case 1: 5 == 5 -> true
// Case 2: 5 == "5" -> true because == compares the values
// Case 3: 5 === "5" -> false becasue === compares the value and datatype

// if-else statement
// if(condition){
// code to be executed if the condition is true
//}else{
// code to be executed if the condition is false
//}

let waterTemp = 105;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}


//Challenge 1: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age = 3; 

if(age>21){
    console.log("you are an adult" )
}else{
    console.log("you are underage")
}

// else-if statement
// if(condition1){
// code to be executed if the condition1 is true
//}else if(condition2){
// code to be executed if the condition2 is true
//}else{
// code to be executed if the conditions were false
//}

function ageCalculator(){
    let age = prompt("Enter the age:");

    if(age<13){
        console.log("You are a child");
    }else if(age<21){
        console.log("You are a teenager");
    }else if(age<64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}

// challenge 2: 

// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)
function traffic(){
    let light = prompt("Enter a color:");

    if(light == "green"){
        console.log("Go!");
    }else if(light=="yellow"){
        console.log("Slow Down!");
    }else if(light == "red"){
        console.log("Stop!");
    }else{
        console.error("Unknown light color. Please proceed with caution.");
    }
}


function ticketCalculator(){
    // the code of your conditions should be here
    let age = prompt("Enter your age");
    let price = 0;

    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }

    document.getElementById("results").innerHTML="Your ticket price is " + price;
}




function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit="";
    let p = document.getElementById("result");

    if(tmp<15){
        outfit="Jacket";
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt";
    }

    p.innerHTML="You should wear: " + outfit;
    
}


// Switch-case
// use it for checking one single variable or expression

let action = prompt("Choose an action: jump, run, attack, or defense");

switch(action){
    case "jump":
        console.log(" You jumped over an obj");
        break;
    case "run":
        console.log("You are running");
        break;
    case "attack":
        console.log("You are attacking the enemy");
        break;
    case "defense":
        console.log("You blocked an attack");
        break;
    default:
        console.log("Unknown action, try again");
}

