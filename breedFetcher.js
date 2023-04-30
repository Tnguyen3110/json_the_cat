const request = require('request');
const process = require('process');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Handle the response data here
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed ${breedName} not found`);
    } else {
      console.log(data);
    }
  } else {
    // Handle errors here
    console.log('Error fetching data from API:', error);
  }
});

