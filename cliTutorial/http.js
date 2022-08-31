const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.end('Welcome to our home page sire')
    }
    if(req.url==="/about"){
        res.end("This is the about page 어쩐 일로 왔었습니까?")
    }
    else{
        res.end(`
                <h1>Opps</h1>
                <p>why are you here man?</p>
                <a href="/">Home</a>
                `)
    }
    
})
server.listen(5000)