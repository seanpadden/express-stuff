const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweet');

// GET INDEX
router.get('/', async (req, res) => {
  try {
    const tweets = await Tweet.find()
    res.json(tweets)
  }
  catch (err){
    res.json({message: err})
  }
});


// CREATE POST
router.post('/', async (req, res) => {
  const tweet = new Tweet({
    tweet: req.body.content,
    userId: req.body.userId
  })
  try {
    const savedTweet = await tweet.save();
    res.json(savedTweet)
  }
  catch(err) {
    res.json({message: err})
  }
})

module.exports = router
