console.clear()
const prompt = require('prompt-sync')({ sigint: true });
const personName = prompt(" Hi there, please enter your name please ");
const randomResponse = Math.floor(Math.random() * 20);
personName.length > 0 ? console.log(`Hello ${personName.toUpperCase()}, let's guess your fortune`) : console.log(`Hello, let's guess your fortune`);
const question = "This will be the probability that you will get the job on TELUS INTERNACIONAL";
console.log(`-----------------------------------------------${question}------------------------------------------------------------------`);
const array = ['It is certain.', 'Is is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.',
    'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good',
    'Very doubtful'];

if (randomResponse == 0) {
    console.log('Try again');
} else if (randomResponse <= 10) {
    console.log(`Lucky you, ${array[randomResponse - 1]}`);
} else if (randomResponse > 10 && randomResponse <= 15) {
    console.log(`I dont know, ${array[randomResponse - 1]}`);
} else if (randomResponse > 15 && randomResponse <= 20) {
    console.log(`Sorry, ${array[randomResponse - 1]}`);
}