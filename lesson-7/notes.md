# Closure

- An inner function that has access to it's lexical scopes... at least it's own scope and it's parent scope.

```js
const workshop = "JavaScript";

function parent() {
  const par = "tyler";
  return function child() {
    const chi = "clark";
    console.log(workshop, par, chi);
  };
}

const me = parent();

me(); // JavaScript tyler clark
```

- It is a way to make variables private from the outside scope. Hiding implementations while programming towards interfaces. Implementation details change frequently and often.
- This is used everyday with callbacks, currying, and partially applied functions.

* So think this, It is not a snapshot of values.. Closure does not close over a "value". You close over variables. It is a preservation of a linkeage to a variable, not the capturing of a variable.

```js
let workshop = "JavaScript";

function parent() {
  const par = "tyler";
  return function child() {
    const chi = "clark";
    console.log(workshop, par, chi);
  };
}

workshop = "React";

const me = parent();

me(); // React tyler clark
```
