document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertTemperature);
  });
  
  function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    const resultArea = document.getElementById("resultArea");
  
    if (!temperatureInput || isNaN(temperatureInput)) {
      resultArea.innerHTML = "Please enter a valid temperature.";
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    let convertedTemp, unit;
  
    if (selectedUnit === "celsius") {
      convertedTemp = convertToCelsius(temperature);
      unit = "°C";
    } else if (selectedUnit === "fahrenheit") {
      convertedTemp = convertToFahrenheit(temperature);
      unit = "°F";
    } else if (selectedUnit === "kelvin") {
      convertedTemp = convertToKelvin(temperature);
      unit = "K";
    }
  
    resultArea.innerHTML = `Converted temperature: ${convertedTemp.toFixed(2)} ${unit}`;
  }
  
  function convertToCelsius(temp) {
    return (temp - 32) * 5/9;
  }
  
  function convertToFahrenheit(temp) {
    return temp * 9/5 + 32;
  }
  
  function convertToKelvin(temp) {
    return temp + 273.15;
  }
  