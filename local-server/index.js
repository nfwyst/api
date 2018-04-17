const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const apiMiddleware = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000
mongoose.connect('mongodb://localhost:27017/api')

app.use(express.static('public'))
   .use(bodyParser.json()) // parse application/json
   .use('/api', apiMiddleware)
   .use((err, req, res, next) => {
     res.status(422).send({error: err.message})
   })

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})
