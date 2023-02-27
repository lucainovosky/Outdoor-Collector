const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})//vado a leggere il file config creato manualmente
const app = require('./app')
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
const LOCAL_DB = process.env.LOCAL_DATABASE
const port = process.env.PORT || 8000

//connect to Mongo DB
mongoose.set("strictQuery", false);//prevent to save non handled data
mongoose.connect(LOCAL_DB).then(con => {
  console.log("DB connection OK!!!")
})

//run the server
const server = app.listen(port, ()=> {
    console.log(`App running on: http://localhost:${port}`)
})

//sottoscrivo qui ogni errore non gestito e vado a chiudere l'applicazione
process.on('unhandledRejection', err=> {
    console.log('Unhandled Rejection, app shutting down')
    console.log(err.name, err.message)
    server.close(()=> {
        process.exit(1)
    })
})
