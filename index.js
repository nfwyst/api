const express = require('express')
const app = express()

app.get('/this/is/a/test', (req, res) => {
  res.status(200).send({test: "this test works"})
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})
