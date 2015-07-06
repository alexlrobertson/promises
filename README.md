# Promises

## Dictionary

### Promise

> a declaration that something will or will not be done, given, etc., by one

A declaration that something will successfully be resolved or rejected and only once.

A Promise cannot be resolved or rejected more than once.

> something that has the effect of an express assurance; indication of what may be expected

A single thing which we can be assured of its type before being given it.

Promises should resolve to one type of object. Resolving to different types is confusing and reduces clarity about the system.

### Deferred

> postponed or delayed

Something that has been paused, awaiting something.

> suspended or withheld for or until a certain time or event

An action that can be resumed later

## Terminology

* "promise" - object or function with a `then` method which conforms to spec
* "thenable" - object or function that defines a `then` method
* "value" - any legal ECMAScript value
* "exception" - value thrown using a `throw` statement
* "reason" - a value that indicates why a promise was rejected

[Promise/A+](https://promisesaplus.com/)

## States

* Pending:
  * May transition to either the fulfilled or rejected state
  * This is the initial state on creation
* Fulfilled: 
  * Can not transition to any other state
  * Must have a value, which is immutable
* Rejected:
  * Can not transition to any other state
  * Must have a reason, which is immutable

## `then`

* Takes two arguments: `onFullfilled`, `onRejected`
* Both are optional and must be functions
* Registers handlers which will be called when their respective states are invoked
* `then` may be called multiple times on the same promise (callbacks execute in registration order)
* Returns a promise

## Resolution

* If resolved to a promise, adopt its state and values
* If resolved with a object or function, if it is `thenable`, add it to the promise chain
* If resolved with something else, just fulfill it

## Problems it Solves

## Chain

```javascript
try {
  // a thrown error on any line within this block will be caught
  return finallyThis(
    thenThis(
      thisHappens(result)
    )
  );
} catch (err) {
  console.error(err);
}
```

```javascript
try {
  thisHappens(function () {
    thenThis(function () {
      finallyThis();
    });
  });
} catch (err) {
  console.error(err);
}
```

```javascript
thisHappens()
  .then(thenThis)
  .then(finallyThis)
  .catch(function (err) {
    console.error(err);
  });
```

## Quirks

* You can't resolve a promise to itself (https://promisesaplus.com/#point-48)

http://dictionary.reference.com/browse/promise?s=t
