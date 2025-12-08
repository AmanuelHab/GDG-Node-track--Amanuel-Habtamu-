const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === '/'){
        res.statusCode = 200;
        res.end("Welcome to the Home Page");
    }else if(req.method === "GET" && req.url ==='/info'){
        res.statusCode = 200;
        res.end("This is the information page");
    }else if(req.method === "POST" && req.url === '/submit'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.end("Received POST data");
        });
    }
});

server.listen(3000, () =>{
    console.log("Server running on port 3000");
});