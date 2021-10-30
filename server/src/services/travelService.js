const MongoDbRepo = require('../repository/mongoDbRepository');
const { getCoordinates } = require('./geocodeService');

class TravelService {
  constructor() {
    this.TravelRepository = new MongoDbRepo('Travels');
  }
  getAllTravels() {
    return this.TravelRepository.getAll();
  }
  async createTravel(doc) {
    const geoInfo = await getCoordinates(doc.city);
    const geoDoc = {
      ...doc,
      ...geoInfo,
    };
    return this.TravelRepository.create(geoDoc);
  }
  updateTravel(id, doc) {
    return this.TravelRepository.updateById(id, doc);
  }
}

module.exports = TravelService;
