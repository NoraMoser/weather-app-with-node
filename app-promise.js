const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDwvJ2tcM0qGJP-Fc0W9_ce5Eoj7MTsndw`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address')
    } 

    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/337fbca7fe6ae5b598db2d1a1c2ecfa0/${latitude},${longitude}`;

    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl);

}).then((response) => {
    var temperature = response.data.currently.temperature;
    console.log(`temp: , ${temperature}`);
}).catch((error) => {
    if(error.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    } else {
        console.log(error.message);
    }
});