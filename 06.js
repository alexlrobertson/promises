Promise.race([something(), anotherThing()])
    .then(function (result) {
        // A or B
        console.log(result);
    });

function something() {
    return Promise.resolve('A');
}

function anotherThing() {
    return Promise.resolve('B');
}
