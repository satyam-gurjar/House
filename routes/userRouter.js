//core modules
const path = require('path');


//External modules
const express = require('express');
const userRouter = express.Router();


userRouter.get("/",(req,res,next) => {
 res.sendFile(path.join__dirname,"../","views",'home.html')
}) 


module.exports = userRouter;