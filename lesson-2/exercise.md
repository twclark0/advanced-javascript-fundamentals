# Prototypes:

The following code snippet shows three functions that all return something different. Our goal is to put all of the functions into their own object, then link each object (with their one property) together through the prototype chain:

```js
function hasArm() {
  return true
}

function hasLeg() {
  return false
}

function hasHead() {
  return 'yes'
}
```

---

Outcome:

- Three objects with one property that have one of the functions listed above
- Connect each object together through the prototype chain
- A fourth object without any properties but has access to all three functions through the prototype chain.
- You'll know you did it right when you can invoke each function from the final object and receive the return values
