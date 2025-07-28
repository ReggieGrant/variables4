function convertTemperature(temp,scale){
    if(scale === "C"){
        // convert celsius to farenheit
        return (temp * 9/5) + 32;
        // convert farenheit to celsius
        return (temp - 32) * 5/9;
    }else{
        throw new Error("invalid scale.")
    }
    }

    function convertAndDisplay() {
      const temp = parseFloat(document.getElementById('tempInput').value);
      const scale = document.getElementById('scaleInput').value;

      if (isNaN(temp)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
      }

      const converted = convertTemperature(temp, scale);
      const targetScale = scale === "C" ? "Fahrenheit" : "Celsius";
      document.getElementById('result').textContent = `Converted temperature: ${converted.toFixed(2)} °${targetScale.charAt(0)}`;
    }