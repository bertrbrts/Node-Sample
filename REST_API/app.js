const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postRoute = require('./Routes/Posts');
app.use('/posts', postRoute);

// routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log("connected to db")
);

app.listen(3000);