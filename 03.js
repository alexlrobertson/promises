loadSomething()
    .then(function (something) {
        loadAnotherThing(something)
            .then(function (another) {
                doSomethingOnThem(something, another);
            });
    });

Promise.all([loadSomething(), loadAnotherThing()])
    .then(function (results) {
        doSomethingOnThem(results[0], results[1]);
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
