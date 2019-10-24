## Intro

Primitive types: is data that is not an object, has no methods and cannot be mutated.

Everything in JavaScript is _Not_ actually an object

##### The latest primitive types are : string, number, bigint, boolean, null, undefined, and symbol

```js
typeof 'hello world' // "string"
typeof 1 // "number"
typeof false // "boolean"
typeof 42n // "bigint"
typeof Symbol() // "symbol"
typeof null // "object"
typeof undefined // "undefined"

// Not a primitive
typeof NaN // "number"

// Data type, not a primitive
typeof {} // "object"
```

- BigInts can use all operators that numbers can use though it is not strictly equal to a `Number`, but "loosely so".

---

### Code example

Example:

```js
let obj = { a: 1 }

function addTwo(obj) {
  obj.a = 2
}

addTwo(obj)

// obj is now {a: 2}
```

Example 2:

```js
let num = 1

function addTwo(num) {
  num = num + 2
  console.log(num)
}

addTwo(num)

// console.log(num)
```

---

### Wrapper objects

- _But I can dot into prototype methods on strings??_
- Answer: Auto-boxing. This is the boxing, or wrapping, of value types in objects when they are treated like objects. Behind the scenes, a temporary object is created for the duration of the use of the value type instance.

Primitive wrapper objects in JavaScript (Natives, Constructors, Fundamental Object)

```js
const str = 'foo'
console.log(typeof str)
console.log(str.length)
```

vs

```js
const wrapperString = new String('foo')

console.log(typeof wrapperString)

console.log(wrapperString)

console.log(wrapperString[0])

console.log(Object.getPrototypeOf(wrapperString) === String.prototype)
```

- Should try to use the literal syntax for everything.. You can use it on RegExp, Error.. and Date (no literal)

#### Gotchas

```js
const foo = false
const bar = new Boolean(false)

foo === bar // false

typeof bar // "object"
```

vs.

```js
const baz = false
const buzz = Boolean(false)

baz === buzz // true

typeof buzz // "boolean"
```
