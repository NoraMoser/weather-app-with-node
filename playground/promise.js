var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500);
    });
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         reject('Sorry, dude');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (error) => {
//     console.log('Error: ', error);
// });

asyncAdd(2, 4).then((res) => {
    console.log('answer: ', res);
    return asyncAdd(res, 45);
}).then((res) => {
    console.log('new promise: ', res);
}).catch((errorMessage) => {
    console.log(errorMessage)
});