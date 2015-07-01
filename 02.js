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
    .then(function (things) {
        // consoles `[]`
        console.log(things);
    });

/**
 * a typical situation where errors and non-ideal cases are handled
 * by resolving to a default value
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
 */
(function () {
    return new Promise(function (resolve, reject) {
        Promise.resolve()
            .then(function (things) {
                return things.map(function (item) {
                    return item;
                });
            })
            .then(function (things) {
                resolve(things);
            })
            .catch(function (err) {
                console.error(err);
                resolve([]);
            });
    });
}())
    .then(function (things) {
        // consoles `[]`
        console.log(things);
    });
