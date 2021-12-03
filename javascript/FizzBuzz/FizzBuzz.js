'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



const fs = require('fs');
/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    let i = 0;
    while(i < n) {
        i++;
        const multiple3 = (i%3 === 0);
        const multiple5 = (i%5 === 0);
        if (multiple3 || multiple5) {
            let result = '';
            if (multiple3) {
                result += 'Fizz';
            }
            if (multiple5) {
                result += 'Buzz';
            }
            
            ws.write(`${result}\n`);
        } else {
            ws.write(`${i}\n`);
        }
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
