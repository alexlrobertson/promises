/**
 * Don’t reject without an explained reason!
 */
function getBaz(something, value) {
    // ...

    return Promise.reject();
}

/**
 * Even a general error can be helpful
 */
function getBaz(something, value) {
    // ...

    return Promise.reject(new Error('Something went wrong'));
}
