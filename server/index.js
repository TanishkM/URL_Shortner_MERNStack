const express=require('express');
const app=express()
const router = express.Router();
const http=require('http');
const connectToMongo = require('./db');
const cors = require("cors");
const server=http.createServer(app);
const Link = require('./models/Links');

connectToMongo();
app.use(cors());
app.use(express.json())
app.use('/api/links', require('./routes/links'))
server.listen(3001,()=>{
    console.log('server running !!');

});