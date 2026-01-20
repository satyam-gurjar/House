const Favourite = require('../models/favourite');
const Home = require('../models/homes');


exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index'
    })
  });
};


exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render('store/home', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home'
    })
  });
};



exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {
    pageTitle: 'My Bookings',
    currentPage: 'bookings',
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then(favourites => {
    Home.fetchAll().then(registeredHomes => {
      
      const favouriteHomes = registeredHomes.filter(home =>
        favourites.includes(home._id));
      res.render('store/Favourite-list', {
        favouriteHomes: favouriteHomes,
        pageTitle: 'My Favourites',
        currentPage: 'Favourites'
      })
    });
  });

};


exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.homeId;
  const fav = new Favourite(homeId);
  fav.save().then(result => {
    console.log("add t0 favourite")
  }).catch(err => {
    console.log("errror add to favourites :", err)
  }).finally(() => {
    res.redirect("/favourites")
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.DeleteById(homeId, error => {
    if (error) {
      console.log("Error while removing from favourites", error)
    }
    res.redirect("/favourites")
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {
    if (!home) {
      console.log('home not found')
      res.redirect("/homes")
    }
    else {
      res.render('store/home-detail', {
        home: home,
        pageTitle: "Home Detials",
        currentPage: "Home",
      })
    }
  });
};