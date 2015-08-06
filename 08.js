/*
 * Promises cannot be cancelled
 *
 * promise.cancel
 * promise.stop
 * promise.please
 * promise.no
 * promise.abort
 *
 * Instead, we need to alter the control flow
 */

/*
 * We can hack around to timeout our promises
 */
var race = Promise.race([
        doSomethingReturningAPromise(),
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject('timeout');
            }, 500);
        })
]);
