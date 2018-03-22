const request = require('request');



geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDwvJ2tcM0qGJP-Fc0W9_ce5Eoj7MTsndw`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('No address matched that query.')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });

}

module.exports = {
    geocodeAddress
}

// 337fbca7fe6ae5b598db2d1a1c2ecfa0