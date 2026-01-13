const Home = require('../models/homes');


exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index'
    })
  );
};


exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('store/home', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home'
    })
  );
};



exports.getBookings = (req, res, next) => {
    res.render('store/bookings', {
      pageTitle: 'My Bookings',
      currentPage: 'bookings',
    });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render('store/Favourite-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'My Favourites',
      currentPage: 'Favourites'
    })
  );

};