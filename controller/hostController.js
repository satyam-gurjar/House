const Home = require('../models/homes');


exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', { 
    pageTitle: 'Add Home to airbnb', 
    currentPage: 'AddHome' 
  });
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('host/host-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Host Homes List',
      currentPage: 'host-homes'
    })
  );
};

exports.postAddHome = (req, res, next) => {

  const {houseName,price,location,Rating,PhotoURL} = req.body;
  const home = new Home(houseName,price,location,Rating,PhotoURL);
  home.save();
  
  res.render('host/homes-added', {
     pageTitle: 'Home Edit Succesfully', 
     currentPage: 'AddHome' 
    });
};



