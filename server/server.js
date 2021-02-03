const express = require('express');
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect('mongodb://localhost:27017/react_native_demo_db', options);

const BookModel = mongoose.model(
    'books',
    new mongoose.Schema(
      { name: String, price: Number },
      { versionKey: false, timestamps: true }
    )
  );

 const pokemon = new BookModel({
   name: 'Pokemon Special nodemon ver.',
   price: 50,
 });

 pokemon.save().then(() => console.log('save success!!'));

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'ok' });
  });

app.listen(9000, () => console.log('Server running on port 9000.'));