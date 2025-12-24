import Joi from "joi";
import { bookSchema } from "../utils/validationSchema.js";

let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "The Chemist",
    price: 440,
  },
  {
    id: 2,
    title: "ተልሚድ",
    author: "ይስማዕከ ወርቁ",
    price: 330,
  },
];
let nextId = 3;

const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

const searchBook = (req, res) => {
  res.status(200).type("text").send("You are on the search page.");
};

const getBook = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send("Invalid ID");
  }
  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).send(`Book with ID ${id} not found`);
  }

  res.json(book);
};

const createBook = (req, res) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const newBook = {
    id: nextId++,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
  };
  books.push(newBook);
  res.status(201).json({ message: "Book registered!", book: newBook });
};
const deleteBook = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send("Invalid ID");
  }
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).send(`Book with ID ${id} not found`);
  }
  books.splice(bookIndex, 1);

  res.status(200).send("Book deleted successfully.");
};

export default { getAllBooks, searchBook, getBook, createBook, deleteBook };
