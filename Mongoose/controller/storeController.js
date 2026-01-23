const Home = require('../models/homes');
const User = require('../models/user');


exports.getIndex = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index',
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    })
  });
};


exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render('store/home', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'Home',
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    })
  });
};

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {
    pageTitle: 'My Bookings',
    currentPage: 'bookings',
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await  User.findById(userId).populate('favourites');
  console.log("User",user);


  // Favourite.find()
  // .populate('houseId')
  // .then(favourites => {
  //   const favouriteHomes = favourites.map((fav) => fav.houseId);

  //     res.render('store/Favourite-list', {
  //       favouriteHomes: favouriteHomes,
  //       pageTitle: 'My Favourites',
  //       currentPage: 'Favourites',
  //       isLoggedIn: req.session.isLoggedIn,
  //       user: req.session.user,
  //     })
  //   });
}




exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.homeId;

  Favourite.findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        return res.redirect("/favourites");
      } else {
        fav = new Favourite({ houseId: homeId });
        fav.save().then((result) => {
      
        })
      }
      res.redirect("/favourites")
    }).catch(err => {
      console.log("Error while marking favourite:", err)
    })

};


exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ houseId: homeId })
    .then(result => {
    }).catch(err => {
      console.log("errror add to favourites :", err)
    }).finally(() => {
      res.redirect("/favourites")
    });
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {
    if (!home) {
      res.redirect("/homes")
    }
    else {
      res.render('store/home-detail', {
        home: home,
        pageTitle: "Home Detials",
        currentPage: "Home",
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      })
    }
  });
};