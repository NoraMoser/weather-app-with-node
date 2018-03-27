const request = require('request');


var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDwvJ2tcM0qGJP-Fc0W9_ce5Eoj7MTsndw`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('No address matched that query.')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    })
}

geocodeAddress('37130').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage);
})