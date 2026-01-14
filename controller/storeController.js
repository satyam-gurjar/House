const Favourite = require('../models/favourite');
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
  Favourite.getFavourites((favourites) =>{
  Home.fetchAll((registeredHomes) =>{
    const favouriteHomes = registeredHomes.filter(home => 
      favourites.includes(home.id));
    res.render('store/Favourite-list', {
      favouriteHomes : favouriteHomes,
      pageTitle: 'My Favourites',
      currentPage: 'Favourites'
    })
  });
});

};


exports.postAddToFavourite = (req,res,next) => {
  console.log("favourites", req.body);
  Favourite.addToFavourite(req.body.homeId,error => {
    if(error){
      console.log('error by marking favourite',error)
    }
    res.redirect("/favourites")
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId,home => {
    if(!home){
      console.log('home not found')
      res.redirect("/homes")
    }
    else {
      res.render('store/home-detail',{
        home: home,
    pageTitle: "Home Detials",
    currentPage:"Home",
  })
    }
});
};