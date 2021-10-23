const MongoDbRepo = require('../repository/mongoDbRepository');

class TravelService {
  constructor() {
    this.TravelRepository = new MongoDbRepo('Travels');
  }
  getAllTravels() {
    console.log('travelService');

    return this.TravelRepository.getAll();
  }
}

module.exports = TravelService;
