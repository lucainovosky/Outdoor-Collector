const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')

process.on('uncaughtException', err=> {
  console.log('Uncaught exception, app shutting down')
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config({path: './config.env'})//vado a leggere il file config creato manualmente
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

//connect to Mongo DB
mongoose.set("strictQuery", false);//prevent to save non handled data
mongoose.connect(DB).then(con => {
  console.log("DB connection OK!!!")
})

//run the server
app.use(express.static(__dirname + '/dist/outdoor-collector'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)))
const server = http.createServer(app)
server.listen(port, () => console.log(`App running on: http://localhost:${port}`))
