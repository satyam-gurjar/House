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

    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
     
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


  static findById(homeId,callback) {
    this.fetchAll(homes => {
       const homeFound = homes.find(home => home.id === homeId)
   
    callback(homeFound);
     });
  }

};





