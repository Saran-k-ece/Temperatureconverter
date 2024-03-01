function convertToFahrenheit() {
  var celsiusInput = document.getElementById('celsius').value;
  if (celsiusInput === '') {
    alert('Please enter a value for Celsius');
    return;
  }
  var celsius = parseFloat(celsiusInput);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}

function convertToCelsius() {
  var fahrenheitInput = document.getElementById('fahrenheit').value;
  if (fahrenheitInput === '') {
    alert('Please enter a value for Fahrenheit');
    return;
  }
  var fahrenheit = parseFloat(fahrenheitInput);
  var celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('celsius').value = celsius.toFixed(2);
}
