/**
 * A sequence of multiple async processes often becomes a pyramid, even if using promises.
 */
loadSomething()
    .then(function (something) {
        loadAnotherThing(something)
            .then(function (another) {
                doSomethingOnThem(something, another);
            });
    });

function loadSomething() {
    return Promise.resolve('foo');
}

function loadAnotherThing() {
    return Promise.resolve('bar');
}

function doSomethingOnThem() {
    console.log(arguments);
}

/**
 * `Promise.all` awaits all promises and resolves if all resolve or rejects if any reject
 */
Promise.all([loadSomething(), loadAnotherThing()])
    .then(function (results) {
        doSomethingOnThem(results[0], results[1]);
    })
    .catch(function (err) {
        // something went wrong with either loadSomething or loadAnotherThing
    });
