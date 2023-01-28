const convertToCelsius = function(fahrenheit) {
  let celConversion = (fahrenheit -32)*5/9;
  return Math.round(celConversion*10)/10;
};

const convertToFahrenheit = function(celsius) {
  let fahConversion = celsius * 9/5 +32;
  return Math.round(fahConversion * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
