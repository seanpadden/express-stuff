const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)


//ROUTES
app.get('/', (req, res) => {
  res.send('we\'re on home')
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
  console.log('connected to DB!')
);

// start listening
app.listen(6969)

