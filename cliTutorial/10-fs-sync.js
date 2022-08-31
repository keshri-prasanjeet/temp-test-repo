const { readFileSync, writeFileSync } = require('fs')
//If we don't want to destructure
// const fs = require('fs')
// console.log(fs.readFileSync('./cliTutorial/content/first.txt', 'utf8'))
console.log('start')
const first = readFileSync('./cliTutorial/content/first.txt', 'utf8')
const second = readFileSync('./cliTutorial/content/second.txt', 'utf8')
// console.log(first, second)
writeFileSync('./cliTutorial/content/result-sync.txt', 
                `Here is the result : ${first}, ${second}`
                )