 //External modules
const express = require('express');
const storeRouter = express.Router();

//Local modules
const homesControler = require('../controller/storeController')

console.log("getHomes is:", homesControler.getHomes);
storeRouter.get("/",homesControler.getHomes);
console.log('hello')
storeRouter.get("/bookings", homesControler.getBookings);


module.exports = storeRouter;