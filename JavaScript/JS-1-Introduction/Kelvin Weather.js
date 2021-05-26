//Forecasts Temperature in Kelvin
const kelvin = 0;       
// Forecasts Temperature in celsius
const celsius = kelvin - 273 ; 
//Forecasts Tempature in Fahrenheit
let fahrenheit = celsius* (9/5) + 32;
//why "let" instead of "const"!?
      
//Num => Get the floor value
fahrenheit = Math.floor(fahrenheit);

//Actual temperature shown in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Teamperature in Newton scale 
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);