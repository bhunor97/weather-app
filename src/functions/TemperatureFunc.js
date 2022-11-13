const temperatureFunc = (currTemp, setCurrentTemperature) => {
  if (currTemp === "Celsius") {
    setCurrentTemperature("Fahrenheit");
  } else {
    setCurrentTemperature("Celsius");
  }
};

const temperatureDisplayFunc = (currentTemp, celsius, fahrenheit) => {
  if (currentTemp === "Celsius") {
    return celsius;
  }
  if (currentTemp === "Fahrenheit") {
    return fahrenheit;
  }
};

export { temperatureFunc, temperatureDisplayFunc };
