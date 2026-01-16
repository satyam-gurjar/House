const Home = require('../models/homes');


exports.getAddHome = (req, res, next) => {
  res.render('host/edit-home', {
    pageTitle: 'Add Home to airbnb',
    currentPage: 'AddHome',
    editing : false,
  });
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, home => {
    if (!home) {
      console.log("home not found");
      return res.redirect("/host/host-home-list");
    }
    res.render('host/edit-home', {
      home: home,
      pageTitle: 'Edit Your Home',
      currentPage: 'host-homes',
      editing: editing,
    });

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

  const { houseName, price, location, Rating, PhotoURL } = req.body;
  const home = new Home(houseName, price, location, Rating, PhotoURL);
  home.save();

  res.redirect('/host/host-home-list');
};


exports.postEditHome = (req, res, next) => {

  const {id, houseName, price, location, Rating, PhotoURL } = req.body;
  const home = new Home(houseName, price, location, Rating, PhotoURL);
  home.id = id;
  home.save();
  res.redirect('/host/host-home-list');

};

exports.postDeleteHome = (req, res, next) => {
 const homeId = req.params.homeId;
 console.log('came to delete home id ',homeId);
 Home.DeleteById(homeId, error => {
  if(error){
    console.log('error while deleting', error);
  }
  res.redirect('/host/host-home-list');
 })
  
};



