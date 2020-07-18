'use strict'

const express    = require('express')
const consola    = require('consola')
const bodyParser = require('body-parser')
const moment     = require('moment')

const app = express()

app.use(bodyParser.json())
app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  let datetime = moment().format('YYYY-MM-DD HH:MM')
  res.json({
    state: 'OK',
    datetime
  })
  res.end()
})

app.listen(app.get('port'), () => {
  consola.info(`running http://0.0.0.0:${app.get('port')}`)
})