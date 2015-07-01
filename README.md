# Promises

## Dictionary

> a declaration that something will or will not be done, given, etc., by one

A declaration that something will successfully be resolved or rejected and only once.

A Promise cannot be resolved or rejected more than once.

> something that has the effect of an express assurance; indication of what may be expected

A single thing which we can be assured of its type before being given it.

Promises should resolve to one type of object. Resolving to different types is confusing and reduces clarity about the system.

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

http://dictionary.reference.com/browse/promise?s=t
