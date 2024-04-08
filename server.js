const express=require('express');
const expressLayout=require('express-ejs-layouts');
const indexRouter=require('./routes/index.js');
const mongoose = require('mongoose');
const dotenv=require("dotenv");
dotenv.config();

// initializing the app
const app=express();

// setting up the view engine
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout'); // set layout for all pages
app.use(expressLayout); 
app.use(express.static('public')); // static files will be served from public folder

// using routes
app.use('/',indexRouter);

app.listen(process.env.PORT || 3000);

mongoose.connect(process.env.DB_URL);



