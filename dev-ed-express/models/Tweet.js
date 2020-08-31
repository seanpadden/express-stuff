const mongoose = require('mongoose')

const TweetSchema = mongoose.Schema({
  tweet: {
    type: String,
    required: true
  }, 
  userId: {
    type: 'string',
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  }
})

module.exports = mongoose.model('Tweets', TweetSchema);
