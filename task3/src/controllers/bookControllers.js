import Joi from "joi";
import bookSchema from "../utils/validationSchema";

let books = [];
let nextId = 1;

const getAllBooks = (req, res) => {
    res.send(200).json(JSON.stringify(books));
};

const searchBook = (req, res) => {
    res.send(200).type("text").send("You are on the search page.");
};

const getBook = (req, res) => {
    const { id } = req.params.id;
    const book = books.find(book => book.id === id);

    if(!book){
        return res.status(404).send(`Book with ID ${id} not found`);
    }

    res.json(book);
};

const createBook = (req, res) =>{
    const { error } = bookSchema.validate(req.body);
    if(error){
        return res.status(400).json({ error: error.details[0].message});
    }

    const newBook = {
        id: nextId++,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    }
    books.push(newBook);
    res.status(201).json({ message: "Book registerd!", book: newBook });
};
const deleteBook = (req, res) =>{
    const {id} = req.params.id;
    const bookIndex = books.findIndex(book => book.id === id);

    if(bookIndex === -1){
        return res.status(404).send(`Book with ID ${id} not found`);
    }

    const deletedB = books.splice(bookIndex, 1)[0];

    res.status(200).send("Book deleted successfully.");
}