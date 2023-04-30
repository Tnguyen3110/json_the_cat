const request = require('request');
const process = require('process');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(`HTTP Error ${response.statusCode}`, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed ${breedName} not found`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

s;
module.exports = { fetchBreedDescription };
