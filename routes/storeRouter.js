 //External modules
const express = require('express');
const storeRouter = express.Router();

//Local modules
const homesControler = require('../controller/storeController')


storeRouter.get("/",homesControler.getIndex);

storeRouter.get("/homes", homesControler.getHomes);

storeRouter.get("/bookings", homesControler.getBookings);

storeRouter.get("/favourites", homesControler.getFavouriteList);


module.exports = storeRouter;