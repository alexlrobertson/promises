/**
 * a typical situation where errors and non-ideal cases are handled
 * by resolving to a default value
 */
(function () {
    var deferred = Promise.defer();

    Promise.resolve()
        .then(function (things) {
            return things.map(function (item) {
                return item;
            });
        })
        .catch(function (err) {
            console.error(err);
            deferred.resolve([]);
        });

    return deferred.promise;
}())

    // down the promise chain
    .then(function (things) {
        // consoles `[]`
        console.log(things);
    });

/**
 * Errors in the outer function are not caught by the promise chain.
 */
try {
    (function () {
        var deferred = Promise.defer();

        Promise.resolve('foo')
            .then(function (thing) {
                deferred.resolve(thing);
            })
            .catch(function (err) {
                // does not get called
                console.error(err);
                deferred.resolve('bar');
            });

        // what if we did something stupid?
        ''.garbage();

        return deferred.promise;
    }())
        .then(function (things) {
            // does not get called
            console.log(things);
        });
} catch (err) {
    console.error(err);
}

/**
 * To solve for this anti-pattern, we use the existing promise 
 * and return from our `catch` statement
 */
(function () {
    fetch('http://example.com')
        .then(function (things) {
            return things.map(function (item) {
                return item;
            });
        })
        .catch(function (err) {
            console.error(err);
            return [];
        });
}())

    // down the promise chain
    .then(function (things) {
        // consoles `[]` regardless
        console.log(things);
    });
