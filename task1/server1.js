const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to the Home Page");
  } else if (req.method === "GET" && req.url === "/info") {
    res.statusCode = 200;
    res.end("This is the information page");
  } else if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    
    req.on("end", () => {
      const bodyJSON = JSON.parse(body);
      res.statusCode = 200;
      res.end(JSON.stringify(bodyJSON));
    });
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000...");
});