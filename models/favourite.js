const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { DeleteById } = require('./homes');


 const favouriteDataPath = path.join(rootDir, 'Data', 'favourite.json');

module.exports = class Favourite {

  static addToFavourite(homeId,callback) {
    Favourite.getFavourites((favourites)=> {
      if(favourites.includes(homeId)){
        callback("home is favourites marked already")
      }
      else
      {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback);
      };
    });
  };

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath,(err,data) => {
      callback(!err ? JSON.parse(data) : [] )
    });
  };

  static DeleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(id => id !== delHomeId);
      fs.writeFile(favouriteDataPath,JSON.stringify(homeIds),callback);
    })
  }

};





