const assignment = require('./assignment');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   
readline.question('Number: ', num => {
    console.log(assignment(num));
    readline.close();
});
