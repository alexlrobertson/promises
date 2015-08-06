/*
 * Many simple callbacks don't require wrapping function
 */

var number = 0;

function resolve(result) {
    return new Promise(function (resolve) {
        resolve(result || ++number);
    });
}

resolve()
    .then(function (result) {
        // 1
        console.log(result);
    })

    /*
     * ugly
     */
    .then(function () {
        return resolve();
    })
    .then(function (result) {
        // 2
        console.log(result);
    })

    /*
     * clean
     */
    .then(resolve)
    .then(function (result) {
        // 3
        console.log(result);
        return result;
    })

    /*
     * Be careful if your callback takes a parameter,
     * as it will be the result from the promise chain!
     */
    .then(resolve)
    .then(function (result) {
        // 3
        console.log(result);
    });
