const http=require("http")

const server= http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end("HEre is our short history")
    }
    res.end(`
        <p>oops, sorry!</p>
        <h1>sorry for the mess<h1>
    `)
})

server.listen(4000)