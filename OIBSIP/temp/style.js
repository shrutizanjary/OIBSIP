function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultElement = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    if (!isNaN(temperature)) {
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        let result;

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (temperature - 32) * 5/9;
        } else {
            result = temperature; // No conversion needed
        }

        resultElement.innerHTML = `${temperature.toFixed(2)} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
    } else {
        resultElement.innerHTML = "Please enter a valid number for temperature.";
    }
}