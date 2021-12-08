const assignment = require('./assignment');

if(process.argv[process.argv.length-1]=='--prompt-for-input'){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Number: ', num => {
        console.log(assignment(num));
        readline.close();
    });
} else {
    process.stdin.on('data', data => {
        console.log(assignment(data.toString()));
        process.exit();
    });
}
