## Intro

Primitive types: is data that is not an object and has no methods. Cannot be mutated and is not "callable"

Everything in JavaScript is *Not* actually an object

##### The latest primitive types are : string, number, bigint, boolean, null, undefined, and symbol

```js
typeof bar // "undefined"
typeof 'hello world' // "string"
typeof 1 // "number"
typeof false // "boolean"
typeof 42n // "bigint"
typeof Symbol() // "symbol"
typeof NaN // "number"
typeof null // "object"

// Data type, not a primitive
typeof {} // "object"
```

- BigInts can use all orerators that numbers can use though it is not strictly equal to a `Number`, but "loosely so".

---
### Code example

Example:

let value = 1

```js
function addTwo(value) {
  value += 2
}

addTwo(value)
// value stays 1
```

Example 2:

```js
let value = { a: 1 }

function addTwo(value) {
  value.a = 2
}

addTwo(value)
// value is now {a: 2}
```

---

### Wrapper objects

- *But I can dot into prototype methods on strings??*
- Answer: Auto-boxing. This is the boxing, or wrapping, of value types in objects when they are treated like objects. Behind the scences, a temporary object is created for the duration of the use of the value type instance. It also only

Primitive wrapper objects in JavaScript (Natives, Constructors, Fundamental Object)

```js
String(1) //  "1"
typeof String(1) // "string"

Number('1') // 1
Boolean('false') // true
Boolean(false) // false
```

&

```js

const wrapperString = new String('foo')

typeof wrapperString // "object"

// {"foo"}
// wrapperString[0] = "f"
// String.prototype

```

- Should try to use the literal syntax for everything.. You can use it on RegExp, Error.. and Date (no literal)

#### Gotchas

```js

const foo = false
const bar = new Boolean(false)

foo === bar // false

typeof bar // "object"

const baz = false
const buzz = Boolean(false)

baz === buzz // true

typeof buzz // "boolean"


```

---

### Special Values

- `Infinity`, `-Infinity`
- `+0`, `-0`
- Understanding Object.is()... takes two parameters and handles the cases like NaN === NaN and 0- === 0
