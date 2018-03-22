const request = require('request');



weatherInformation = () => {
    request({
        url: `https://api.darksky.net/forecast/337fbca7fe6ae5b598db2d1a1c2ecfa0/35.8807375,-86.317392`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Weather servers.');
        // } else if (response.statusCode === 400) {
        //     console.log =('Unable to fetch weather')
        } else if (response.statusCode === 200) {
            console.log('temperature:', body.currently.temperature);
        }
    });

}

module.exports = {
    weatherInformation
}