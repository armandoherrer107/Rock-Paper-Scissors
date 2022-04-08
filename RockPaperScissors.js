const { MultiSelect } = require('enquirer');

const computerSelection = () => {
    const selection = Math.round(Math.random() * 2);
    return selection;
}
const arrayResponses = ['Rock', 'Paper', 'Scissors'];

const computerRandomValue = arrayResponses[computerSelection()];

const prompt = new MultiSelect({

    name: 'value',
    message: 'Choose between Rock, Paper, Scissors',
    limit: 3,
    choices: [
        {
            name: 'Rock',
            value: '#050404'
        },
        {
            name: 'Paper',
            value: '#FDFBFB'
        },
        {
            name: 'Scissors',
            value: '#FD3206'
        }
    ]

});

const whoIsTheWinner = () => {
    prompt.run()
        .then(answer => {
            console.log(answer);
        })
        .catch(console.error);
}
whoIsTheWinner();
