const Home = require('../models/homes');


exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render('store/home', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home'
    })
  );
};



exports.getBookings = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render('store/bookings', {
      registeredHomes: registeredHomes,
      pageTitle: 'My Bookings',
      currentPage: 'bookings'
    })
  );
};