/*
 * The `then()` method takes two handlers, one for fullfillment 
 * and one for rejection. Any errors occurring in the fulfillment
 * handler do not cause the rejection handler to be called.
 */

/**
 * A typically imagined scenario: Error from `successA` will 
 * be handled by `error` and not passed to `successB`.
 */
Promise.resolve('foo')
    .then(function successA(result) {
        throw new Error('something when wrong in handling result (early)');
    })
    .then(function successB(result) {
        // this will not be called
        console.log(result);
    }, function error(err) {
        console.log(err);
    });

/**
 * Consider if an error occurs in the last fullfillment handler:
 * nothing will be logged, the error will go unnoticed.
 */
Promise.resolve('foo')
    .then(function (result) {
        throw new Error('something when wrong in handling result (w/o catch)');
    }, function (err) {
        // this will not be called
        console.log(err);
    })
    .then(function (result) {
        // this will not be called
        console.log(result);
    });

/*
 * We can solve this pattern by always ending our chain with 
 * a single `.catch` call. The error will be caught and handled by catch handler.
 */
Promise.resolve('foo')
    .then(function (result) {
        throw new Error('something when wrong in handling result (w catch)');
    })
    .catch(function (err) {
        console.log(err);
    });
