const http = require('http');
const { stringify } = require('querystring');
let students = [];

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === '/students'){
        res.statusCode = 200;
        res.end(JSON.stringify(students));
    }else if(req.method === "POST" && req.url === '/students'){
        let body = [];
        req.on('data', chunk =>{
            body.push(chunk);
        });
        req.on('end', () => {

            res.statusCode = 201;
            res.end(JSON.stringify());
        });
    }else if(req.method === "Put" && req.url === '/students/:id'){

    }else if (req.method === "DELETE" && req.url === '/students/:id'){

    }
});

server.listen(4000, () =>{
    console.log("Server running on port 4000");
});