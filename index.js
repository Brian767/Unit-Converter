/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Get references to DOM elements
const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert");
const lengthEl = document.getElementById("length-result");
const volumeEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputEl.value);
    if(inputValue > 0 && inputValue < 999) {
        const metersToFeet = (inputValue * 3.281).toFixed(3);
        const feetToMeters = (inputValue / 3.281).toFixed(3);
        lengthEl.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;

        const litersToGallons = (inputValue * 0.264).toFixed(3);
        const gallonsToLiters = (inputValue / 0.264).toFixed(3);
        volumeEl.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;

        const kilosToPounds = (inputValue * 2.204).toFixed(3);
        const poundsToKilos = (inputValue / 2.204).toFixed(3);
        massEl.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`;
    } else {
        alert("Please enter a number between 1 and 999.");
        inputEl.value = "";
        return;
    }
});