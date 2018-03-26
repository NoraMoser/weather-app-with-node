var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked!');
        reject('Sorry, dude');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Success: ', message);
}, (error) => {
    console.log('Error: ', error);
});