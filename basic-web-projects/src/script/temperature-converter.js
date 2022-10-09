const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

setCelcius();
setFahrenheit();
setKelvin();

celcius.addEventListener('change', setCelcius);
fahrenheit.addEventListener('change', setFahrenheit);
kelvin.addEventListener('change', setKelvin);

function setCelcius() {
    const result = parseInt(celcius.value);
    document.getElementById('cf').innerHTML = (result * 9/5 + 32).toFixed(2);
    document.getElementById('ck').innerHTML = (result + 273.15).toFixed(2);
}

function setFahrenheit() {
    const result = parseInt(fahrenheit.value);
    document.getElementById('fc').innerHTML = ((result - 32) * 5/9).toFixed(2);
    document.getElementById('fk').innerHTML = (((result - 32) * 5/9) + 273.15).toFixed(2);
}

function setKelvin() {
    const result = parseInt(kelvin.value);
    document.getElementById('kc').innerHTML = (result - 273.15).toFixed(2);
    document.getElementById('kf').innerHTML = ((result - 273.15) * 9/5 + 32).toFixed(2);
}
