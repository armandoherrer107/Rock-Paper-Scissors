const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const SUBSTRACT273 = 273;

console.log("                                 WELCOME\n");
rl.question("                       Enter the Kelvin Temperature\n", (temperature) => {

    const findingFromKToC = () => {
        const celsiusTemperature = temperature - SUBSTRACT273;
        return celsiusTemperature;
    }
    const findingFromCToF = () => {
        const celsiusTemperatureToF = findingFromKToC();
        const fahrenheit = Math.round((celsiusTemperatureToF * 1.8) + 32);
        return fahrenheit;
    }
    console.log(` The entered temperature on Kelvin was ${temperature} on Celsius degress is ` + findingFromKToC() + ` and on Fahrenheit degrees is ` + findingFromCToF());
    rl.close();
})