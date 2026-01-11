//core module
const path = require('path');
//External module
const express = require('express');
const hostRouter = express.Router();

//Local module
const rootDir =require('../utils/pathUtil')


hostRouter.get("/add-home",(req,res,next) => {
  res.render('addHome',{pageTitle:'Add Home to airbnb'});
});

const registeredHomes = [];



hostRouter.post("/add-home",(req,res,next)=>{
  console.log('Home registration succesfull' ,req.body,req.body.houseName);
  registeredHomes.push({houseName : req.body.houseName})
  res.render('homeEdit',{pageTitle:'Home Edit Succesfully'})
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
