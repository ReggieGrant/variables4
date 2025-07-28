console.log("functions.js");

//1. function declration (creating the function)
function sayHello(){
//body of the fn
console.log("Hello chort 60");
}

//2. Call/run/execute/trigger the function (code, console, user)
sayHello();


//Example 1 with 2 parameters
function greet(name){
    console.log("Hello " + name);
}

greet("Raggie");
greet("Elliot","Mike");

function doubleNumber(number){
    let total = number*2;
    console.log(total)
}

doubleNumber(2); // 4
doubleNumber(4); // 8
doubleNumber(6); // 12

// Example 2, with prompt

function welcome(){
    let name = prompt("Enter your name");

    console.log("Welcome " + name + " the age is " + age);
}

// Example 3, with defult parameters

function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log("the total is: " + total)
}

add(5,5);
add(6,2);
add(2,7);
add();

function combineNames(firstname="Unknown",lastname ="Unknown"){
    console.log(`${firtsname} ${lastName}`);
}

combineNames("Alice","Johnson"); // Alice Johnson
combineNames("Alice"); // Alice Unknown
combineNames(); // Unknown Unknown

function convertToSeconds(){
    let minutes = prompt("Enter the minutes");
    document.getElementById("result").innerHTML += `<li class="item">The conversion is: ${60*minutes}s</li>`;

}

convertToSeconds(1); // 60
convertToSeconds(10); // 600
convertToSeconds(3); // 180
