import express from "express";

const app = express();
const PORT = 5000;

app.get("/home", (req, res) =>{
    res.status(200).type("text/html").send("<h1 style=\"color: green;\">Welcome Home!</h1>");
});

app.get("/about", (req, res) =>{
    res.status(200).type("text/plain").send("We are GDG students currently learning Node.js.");
});

app.get("/students/:studentid/", (req, res) => {
    let id = req.params.studentid;
    let department = req.query.department;

    res.status(200).json({ ID: id, Department: department})
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});