const express = require('express');
const BookCtrl = require("../controllers/book_ctrl");
var router = express.Router();

router.get('/books' , BookCtrl.getBooks);
router.post('/book' , BookCtrl.createBook);

module.exports = router;
