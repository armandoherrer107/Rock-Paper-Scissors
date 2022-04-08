const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your human age please?\n", (humanAge) => {
    const onlyFirstTwoYears = () => {
        const totalTwoYears = humanAge * 10.5;
        return totalTwoYears;
    }
    let total = 0;
    if (humanAge <= 2) {
        total = onlyFirstTwoYears();
    } else {
        const substract2Years = humanAge - 2;
        total = (substract2Years * 4) + (2 * 10.5);
    }
    console.log(` Hola soy Armando, tengo ${humanAge} años humanos, lo cual es igual a ${total} años Perro`);
    rl.close();
});