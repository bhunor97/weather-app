const temperatureDisplayFunc = (currentTemp, celsius, fahrenheit) => {
  if (currentTemp === "Celsius") {
    return celsius;
  }
  if (currentTemp === "Fahrenheit") {
    return fahrenheit;
  }
};
