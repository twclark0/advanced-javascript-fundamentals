## HELP! We are having problems with `this`!

#### Step #1:

- When we `new` up `Bar('tyler')` it looks like we are intending to actually have `Foo` create the `name` property on the new object (`a`) through the `new keyword. Though this is not actually happening...? What can we do to make the invocation of`Foo(name)`set the property of`name`on the`a` object?

```js
function Foo(name) {
  this.firstName = name
}

function Bar(name) {
  Foo.call(this, name)
}

const a = new Bar('tyler')

console.log(a.firstName) // undefined.. but we want it to return 'tyler'
```

Hints:

- What is `this` within `Foo`? We want `this` to ultimately point to the `a` object so that it will create that the `firstName` property

#### Step #2:

- Once you get step 1 working, where the `console.log` is returning `'tyler'`, see if you can get this function on the `Bar.prototype` object to correctly return the `firstName` property on the `a` object.

```js
function Foo(name) {
  this.firstName = name
}

Foo.prototype.myName = function() {
  return this.firstName
}

/* Bar function code goes here from step 1 */

const a = new Bar('tyler')

console.log(a.myName()) // a.myName is not a function...  but we want it to return 'tyler'
```

Hints:

- Right now `Foo` and `Bar` have no prototype connection. How can we get `Foo`'s prototype object in the same chain as `Bar`'s prototype so that `a` with have both object's on it's prototype chain. All this while still keeping `this` working as intended.
