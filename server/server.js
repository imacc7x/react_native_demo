const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');

var bookRouter = require("./routes/book_router");
const db = require("../server/db");

const app = express();

// ทำหน้าที่กรอง request ?? Body Paeser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
// app.use("/",index);
 app.use("/api",bookRouter);

app.get('/', (req, res) => {
    res.json({ message: 'ok' });
  });

app.listen(9000, () => console.log('Server running on port 9000.'));

