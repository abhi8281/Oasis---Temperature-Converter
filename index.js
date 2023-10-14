document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelector = document.getElementById("unitSelector");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelector.value;
        let convertedTemperature;
        let convertedUnit;

        if (!isNaN(temperature)) {
            if (unit === "celsius") {
                convertedTemperature = (temperature * 9/5) + 32;
                convertedUnit = "Fahrenheit (°F)";
            } else if (unit === "fahrenheit") {
                convertedTemperature = (temperature - 32) * 5/9;
                convertedUnit = "Celsius (°C)";
            } else if (unit === "kelvin") {
                convertedTemperature = temperature + 273.15;
                convertedUnit = "Kelvin (K)";
            }

            result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
        } else {
            result.textContent = "Please enter a valid temperature.";
        }
    });
});
