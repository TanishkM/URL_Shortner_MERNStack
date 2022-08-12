const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/linkDB"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Database Successfully");
    })
}

module.exports = connectToMongo;