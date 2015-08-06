/*
 * Promises are not lazy
 */
var promise = new Promise(function () {
    setTimeout(function () {
        console.log('This happened');
    }, 500);
});
