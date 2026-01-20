const { getDb } = require("../utils/Databaseutil");


module.exports = class Favourite {

  constructor(houseId) {
    this.houseId = houseId;
  }

  save(){
    const db = getDb();
    return db.collection('favourites').insertOne(this);
  }


  static getFavourites() {
    const db = getDb();
    return db.collection('homes').find().toArray();


  };

  static DeleteById(delHomeId, callback) {
  
  }

};





