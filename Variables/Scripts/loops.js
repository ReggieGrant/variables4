console.log("Loops");

//activity 1


const numTwo = 2;
let result = 0;

document.write("<h2>Table of 2</h2>");
for(let i=0;i<=10;i++){
    result = num*i;
    document.write(`<p> ${num} x ${i} = ${result}</p>`)
}



// FOR LOOPS
// for(start_point; condition ; interval)
for(let i=1; i<4; i++){
    document.write("My for is working?" + i);
}

for(let i=0; i<=10; i++){
    document.write(`<p>${i}</p>`);
    
}
document.write("<h2>Activity 4 </h2>");
for(let i=2;i<21;i+=2){
    document.write(`<p>${i}</p>`);
    
}

// WHILE LOOP
let i = 0; // start point

while(i<=10){ // stop condition
    console.log(i);
    i++; // increment
}

// DO-WHILE Loop
let j = 0; // start point
do{
   console.log(j);
   j++ // increment
}while(j<10) // stop condition

function fillThermo(){
    let thermometer = document.getElementById("thermometer");
    for(let i=0;i<10; i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if(i < 3){
            level.style.backgroundColor = "blue"; // cold
        }else if(i<7){
            level.style.backgroundColor = "orange"; // warm
        }else{
            level.style.backgroundColor = "red"; // hot
        }
        thermometer.appendChild
        }
}

    function generateTable(){
        let tbody = document.getElementById("tempTable");
        for(let i=0;i<10; i+=2){
            let f = (i * 9/5) + 32;
            tbody.innerHTML += `<tr>
            <td> ${i} </td>
            <td> ${f} </td>
            </td>`
        }
    }
    
    function convertToF() {
      const temp = parseFloat(document.getElementById('temperatureInput').value);
      if (!isNaN(temp)) {
        const f = (temp * 9/5) + 32;
        document.getElementById('result').textContent = `${temp}°C = ${f.toFixed(2)}°F`;
      } else {
        document.getElementById('result').textContent = "Please enter a valid number.";
      }
    }

    function convertToC() {
      const temp = parseFloat(document.getElementById('temperatureInput').value);
      if (!isNaN(temp)) {
        const c = (temp - 32) * 5/9;
        document.getElementById('result').textContent = `${temp}°F = ${c.toFixed(2)}°C`;
      } else {
        document.getElementById('result').textContent = "Please enter a valid number.";
      }
    }

    function generateTable() {
      const tbody = document.querySelector("#conversionTable tbody");
      tbody.innerHTML = ""; // Clear previous rows
      for (let c = 0; c <= 100; c += 10) {
        const f = (c * 9/5) + 32;
        const row = `<tr><td>${c}°C</td><td>${f.toFixed(2)}°F</td></tr>`;
        tbody.innerHTML += row;
      }
    }
