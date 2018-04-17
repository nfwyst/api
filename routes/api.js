const express = require('express')
const router = express.Router()


let contact = {
  firstName: "Jane",
  lastName: "Don",
  phone: "123456"
}

// GET ==> /contacts
router.get('/contacts', (req, res) => {
  res.status(200).send(contact)
})

// POST ==> /contact
router.post('/contact', (req, res) => {
  res.status(200).send(contact)
})


// PUT ==> /contact/_id
router.put('/contact/:_id', (req, res) => {
  res.status(200).send(contact)
})

// DELETE /contact/_id
router.delete('/contact/:_id', (req, res) => {
  res.status(200).send(contact)
})

module.exports = router
