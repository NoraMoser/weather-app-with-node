var geocodeAddress = (address) => {

};

geocodeAddress('37130').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage);
})