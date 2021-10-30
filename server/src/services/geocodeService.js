const got = require('got');

const getCoordinates = async city => {
  const { body } = await geocodeCity(city);
  const parsedBody = JSON.parse(body).results[0];
  return {
    fullCityName: parsedBody.formatted_address,
    location: parsedBody.geometry.location,
  };
};

const geocodeCity = async city =>
  await got({
    hostname: 'maps.googleapis.com',
    port: 443,
    path: `/maps/api/geocode/json?address=${city}&key=${process.env.GEOCODE_API_KEY}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.COGNITO_TOKEN,
    },
  });

module.exports = {
  getCoordinates,
};
