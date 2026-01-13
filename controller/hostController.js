const Home = require('../models/homes');


exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', { 
    pageTitle: 'Add Home to airbnb', 
    currentPage: 'AddHome' 
  });
}


exports.postAddHome = (req, res, next) => {

  const {houseName,price,location,Rating,PhotoURL} = req.body;
  const home = new Home(houseName,price,location,Rating,PhotoURL);
  home.save();
  
  res.render('host/homes-added', {
     pageTitle: 'Home Edit Succesfully', 
     currentPage: 'AddHome' 
    });
};



