const request = require('request');



weatherInformation = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/337fbca7fe6ae5b598db2d1a1c2ecfa0/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Weather servers.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather')
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                Apparentemperature: body.currently.apparentTemperature
            });
        }
    });

}

module.exports = {
    weatherInformation
}