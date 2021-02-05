const Book = require('../models/book_model');

getBooks = (req, res) => {
    Book.find({})
      .then((books) => res.json(books))
      .catch((error) => res.status(400).json({message: 'something went wrong!'}));
  };
  
createBook = async (req, res) => {
    const {name, price} = req.body;
  
    const book = new Book({
      name,
      price,
    });
  
    await book.save();
    res.json({message: 'save success.'});
  };

  module.exports = {getBooks , createBook};
  