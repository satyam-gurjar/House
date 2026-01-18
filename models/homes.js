const db = require("../utils/Databaseutil");

module.exports = class Home {
  constructor(houseName, price, location, Rating, PhotoURL) {

    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.Rating = Rating;
    this.PhotoURL = PhotoURL;
  };


  save() {


   
  };



  static fetchAll(callback) {
   return db.execute("SELECT * FROM homes");
   
  }


  static findById(homeId, callback) {
    
  }

  static DeleteById(homeId, callback) {
  }

};





