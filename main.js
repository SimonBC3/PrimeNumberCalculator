const fs = require('fs')

var primeNumbers = []
var i = 2
var max = process.argv.slice(2)

primeNumbers.push(0)
primeNumbers.push(1)


while(i<max) {
    let prime = true
    
    for(let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }

    if(prime) {
        primeNumbers.push(i)
    }
    i++
}

fs.writeFile("numbers.txt", primeNumbers.toString(), (err) => {})