const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config');

//import Routes
const visitsRoute = require('./routes/visits');

//dwfininf configurations
// app.configure(function(){
//     app.use(express.bodyParser());
//     app.use(app.router);
//   });

//middleware
app.use(bodyParser.json());
app.use('/visits', visitsRoute)
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

//home route
app.get('/', (req, res)=>{
    res.send('You are on Home')
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlParser: true}, 
() => console.log("Connected to MongoAtlas"));

//listening to server
app.listen(3000, () =>{
    console.log('Server started at port: 3000')
});