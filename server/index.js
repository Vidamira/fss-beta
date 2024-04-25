const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express();

//mongodb connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.log('Not connected to MongoDB', err))

//middleware to parse data for registerUser
app.use(express.json());

//middleware for jsonwebtokens
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/api/blogs', require('./routes/blogRoutes'));


app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is up and running on ${port}`))