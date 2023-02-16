const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const mongoose = require('mongoose')

/*
connection mongoDB
mongodb+srv://Luca:dragonforce@cluster0.iqjir.mongodb.net/natours
*/

let db = 'mongodb+srv://Luca:dragonforce@cluster0.iqjir.mongodb.net/natours'
let db2 = 'mongodb+srv://Luca:dragonforce@cluster0.iqjir.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db2,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const dbMongo = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//run the server
app.use(express.static(__dirname + '/dist/outdoor-collector'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)))
const server = http.createServer(app)
server.listen(port, () => console.log(`App running on: http://localhost:${port}`))
