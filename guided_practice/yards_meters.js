//This function takes yards and converts it to meters.
function convertToMeters (yards) {
    return yards * 0.9144;
}

console.log(convertToMeters);

//This function takes two arguments for yards and meters to create a message.
function createMessage (yards, meters) {
    let message = '';
    const numYards = yards * 1;
    if (numYards === 1760) {
        return message = 'That is as long as a mile';
    } else if (numYards === 100) {
        return message = 'That is as long as a football field';
    } else if (numYards === 26) {
        return message = 'That is as long as a tennis court!';
    }
    return `${yards} yards is ${meters} meters. ${message}`;
}

//Make a prompt to ask the user how many yards do they want to convert to meters
let inputYards = 100;//prompt('What is the distance in yards you would like to convert to meters?');

//Prints the inputYards variable to the console.
console.log(inputYards);

//Calls the function and passes the input from our prompt into it.
let convertedMeters = convertToMeters(inputYards);

console.log(convertedMeters);

let output = createMessage(inputYards, convertedMeters);

console.log(output);