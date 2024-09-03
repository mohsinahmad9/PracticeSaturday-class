const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const {mongoConnet} = require('./connection');

const productRouter = require('./routes/Product');
const categoryRouter = require('./routes/category');

const app = express();

app.use(cors());

mongoConnet('mongodb://0.0.0.0:27017/nodereact');

app.use(express.json());



app.use('/',productRouter );
app.use('/category',categoryRouter);


app.listen(6500);