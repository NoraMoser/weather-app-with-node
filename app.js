// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// // console.log(argv);
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log("there was an error");
//     } else if (results) {
//         console.log(JSON.stringify(results, undefined, 5));
//     }

// });


const weather = require('./weather/weather');

weather.weatherInformation()
//     if (errorMessage) {
//         console.log("error")
//     } else if (results) {
//         console.log(JSON.stringify(results, undefined, 4));
//     }
// })