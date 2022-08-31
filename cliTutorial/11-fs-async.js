const { readFile, writeFile } = require('fs')

console.log('start the async')
readFile('./cliTutorial/content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./cliTutorial/content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./cliTutorial/content/result-async.txt', `Here is the result ${first}, ${second}`, {flag:'a'},(err, result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with the async writing')
            // console.log(result)
        })
    })
})