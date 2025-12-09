const http = require('http');
let students = [{ name: "Amanuel", id: 1}];
let nextId = 2;

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === '/students'){
        res.statusCode = 200;
        res.end(JSON.stringify(students));
    }else if(req.method === "POST" && req.url === '/students'){
        let body = "";
        req.on('data', chunk =>{
            body += chunk.toString();
            console.log(chunk);
        });
        req.on('end', () => {
            const bodyJSON = JSON.parse(body);
            bodyJSON["id"] = nextId++;
            students.push(bodyJSON);

            res.statusCode = 201;
            res.end(JSON.stringify(bodyJSON));
        });
    }else if(req.method === "Put" && req.url === '/students/'){
        const id = parseInt(req.url.split('/')[2]);
        const index = students.findIndex(student => student.id === id);

        if(index === -1){
            res.statusCode = 404;
            res.end("Student not found");
            return;
        }

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString;
        });

        req.on('end', () => {
            const bodyJSON = JSON.parse(body);
            bodyJSON["id"] = id;
            students[index] = bodyJSON;
            
            res.statusCode = 200;
            res.end(JSON.stringify(students[index]));
        })
    }else if (req.method === "DELETE" && req.url === '/students/'){
        const id = parseInt(req.url.split('/')[2]);
        const index = students.findIndex(student => student.id === id);
        if(index === -1){
            res.statusCode = 404;
            res.end("Student does not exist.");
            return;
        }
        const deletedS = students[index];
        students = students.splice(index, 1);
        res.statusCode = 200;
        res.end("Deleted " + deletedS);
    }else{
        req.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(4000, () =>{
    console.log("Server running on port 4000...");
});