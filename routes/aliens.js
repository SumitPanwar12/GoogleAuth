const express = require('express')
const router = express.Router()
const Alien = require('../models/alien') 

router.get('/',async(req,res)=>{
    
    try{
        const aliens = await Alien.find()
        res.status(200).json(aliens)
    }
    catch{
        res.send("Error" + err);
    }
})

module.exports = router