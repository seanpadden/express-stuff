const express = require('express')
const router = express.Router()
const User = require('../models/User');

// GET INDEX
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  }
  catch (err){
    res.json({message: err})
  }
});


// CREATE USER
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  try {
    const savedUser = await user.save();
    res.json(savedUser)
  }
  catch(err) {
    res.json({message: err})
  }
})

//SHOW USER 
router.get('/:userId', async (req, res) => {
  try {
    const userId = await User.findById(req.params.userId)
    res.json(userId)
  }
  catch(err) {
    res.json({message: err})
  }
})


module.exports = router

