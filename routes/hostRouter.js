//core module

//External module
const express = require('express');
const hostRouter = express.Router();

//Local module
const homesControler = require('../controller/hostController');


hostRouter.get("/add-home",homesControler.getAddHome);
hostRouter.post("/add-home",homesControler.postAddHome);

module.exports = hostRouter;

