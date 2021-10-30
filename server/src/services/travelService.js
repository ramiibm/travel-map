const MongoDbRepo = require('../repository/mongoDbRepository');

class TravelService {
  constructor() {
    this.TravelRepository = new MongoDbRepo('Travels');
  }
  getAllTravels() {
    return this.TravelRepository.getAll();
  }
  createTravel(doc) {
    return this.TravelRepository.create(doc);
  }
  updateTravel(id, doc) {
    return this.TravelRepository.updateById(id, doc);
  }
}

module.exports = TravelService;
