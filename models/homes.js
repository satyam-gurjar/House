const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil')


const homeDataPath = path.join(rootDir, 'Data', 'homes.json');

module.exports = class Home {
  constructor(houseName, price, location, Rating, PhotoURL) {

    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.Rating = Rating;
    this.PhotoURL = PhotoURL;
  };


  save() {


    Home.fetchAll((registeredHomes) => {
      if (this.id) { //edit home case
        registeredHomes = registeredHomes.map(home =>
          home.id === this.id ? this : home);
      }
      else {// add-home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }


      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log("file error :", error);
      });

    })
  };



  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, 'Data', 'homes.json');

    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });

  }


  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId)

      callback(homeFound);
    });
  }

  static DeleteById(homeId, callback) {
    this.fetchAll(homes => {
      homes = homes.filter(home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        Favourite.deleteById(homeId, callback);

      });
    })
  }


};





