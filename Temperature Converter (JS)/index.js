const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
    // Check if a radio button is selected
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9) / 5 + 32;
        result.textContent = `${temp.toFixed(1)} °F`;

    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)} °C`;

    } else {
        result.textContent = "Please select a unit!";
    }
}
