const express = require("express");
const app = express();

const books = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "To Kill a Mockingbird" },
  { id: 3, title: "1984" },
];

// Define a route that accepts URL parameters
app.get("/books/:id", (req, res) => {
  // Retrieve a book by its ID
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.send(`Book Title: ${book.title}`);
});

app.get("/error-example/:id", (req, res) => {
  res.send(`Book ID: ${req.params.id}`);
  // Try to send another response here (this is incorrect)
  res.send("This is an error example");
});

app.get("/fixed-example/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.send(`Book Title: ${book.title}`);
});

app.get("/books/long", (req, res) => {
  res.send("List of long books");
});

app.get("/greet/:firstname/:lastname", (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
