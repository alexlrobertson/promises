/**
 * Catch statements can return, and continue the promise chain as normal
 */
Promise.reject('foo')
  .catch(function (err) {
      // logs 'foo'
      console.error(err);
      return 'bar';
  })
  .then(function (baz) {
      // logs 'bar'
      console.log(baz);
  })
  .catch(function (err) {
      console.error(err);
  });
