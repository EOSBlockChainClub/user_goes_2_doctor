const mongoose = require('mongoose')

const { Schema } = mongoose

let Fuzzy = null

try {
  const FuzzySchema = new Schema({
    _id: {
      timestamp: Number,
      author: String
    },
    author: String,    
    hash: String,   
    location: String, 
    fuzzyConfirmed: {
      type: Boolean,
      default: false
    }
  })
  Fuzzy = mongoose.model('Fuzzy', FuzzySchema)
} catch (e) {
  Post = mongoose.model('Fuzzy')
}

module.exports = Fuzzy
