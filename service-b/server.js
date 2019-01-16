const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const BOOKS_DATA = [
  {
    "id": "5c33a527c97ff033bc3b11bf",
    "title": "1. The Clean Coder: A Code of Conduct for Professional Programmers",
    "author": "1. Robert C. Martin",
    "price": "$2,549.57"
  },
  {
    "id": "5c33a527b45d03547d161a87",
    "title": "2. The Clean Coder: A Code of Conduct for Professional Programmers",
    "author": "2. Robert C. Martin",
    "price": "$2,726.75"
  }];

app.get("/books", async (req, res, next) => {
  res.send(BOOKS_DATA);
});

app.listen(PORT, () => {
  console.info(`Service B running at port ${PORT}`);
});
