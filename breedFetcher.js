const request = require('request');
const process = require('process');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Handle the response data here
    console.log(body);
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  } else {
    // Handle errors here
    console.log('Error fetching data from API:', error);
  }
});

