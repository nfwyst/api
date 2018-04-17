const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  }
}) 

const Contact = mongoose.model('contact', ContactSchema)

module.exports = Contact
