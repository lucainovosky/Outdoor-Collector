const express = require('express')
const app = express()
const outdoorRouter = require('./routes/outdoorRoutes')
const path = require('path')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')

app.use(express.static(__dirname + '/dist/outdoor-collector'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)))

//set security http
app.use(helmet())

//permette al massimo 100 richieste dallo stesso IP in un'ora
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'too many requests from this IP. Please try again in an hour'
})

//applico la funzione alla rout principale
app.use('/api', limiter)

//body parser, reading data into req.body
app.use(express.json({
  limit: '10kb'
}))

//data sanitize against malicious nosql query, filtra query sospette
app.use(mongoSanitize())

//sanitize data against XSS
app.use(xss())

//ROUTES
app.use('/api/v1/outdoor', outdoorRouter)

module.exports = app
