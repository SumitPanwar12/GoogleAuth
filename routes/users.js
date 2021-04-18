const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
    // Rest of the code will go here
    try{
        const users = await User.find()
        res.json(users)
    }
    catch (err) {
        res.status(500).json({message: err.message})
      }
   });



// Create One Route
router.post("/", async (req, res) => {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    });
    try {
      const newUser = await user.save();
      res.status(201).json({ newUser });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
 

    module.exports = router;