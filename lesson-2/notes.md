## Prototypes

##### What the prototype?

- The fundamental way inheritance works in JavaScript.
- Prototypes are objects. It is the linking of objects
- OO languages work through classes, a parent to child relationship. Typically with classes you use the `new` keyword to create a copy of that blueprint code (class)
- Prototypes is the linkeage between objects through properties. Or commonly called the prototype chain.
- When accessing a property, it looks at each object level one at a time until it finds it or returns `null`. So you can "replace" the `.toString()` found on the global `Object.prototype.toString` by giving your object the same property name.

Type in a browser console the following:

```js
const a = {}

console.log(a)
```

---

### Connection between `.prototype` and `__proto__`

- Functions have a `.prototype` property that points to an object with a constructor property, and a `__proto__` property.

```js
function a() {
  return 'hello'
}

console.log(a.prototype)
```

---

### Working with Built in Objects:

- First step is understanding the what the global Functions and Prototypes are, i.e:
- Some are: `Array`, `Object`, `Number`, `String`
- `Object` vs. `Object.prototype`

- `Object.prototype.toString()` vs. `Object.values()`

```js
const b = { name: 'tyler', lastName: 'clark' }

b.toString() // "[object Object]"

b.values() // error, not a function

Object.values(b) // ["tyler", "clark"]
```

---

### Understanding the `new` keyword

- Does main three things: Creates a new object, connects new object's `__proto__` to function's `.prototype`, `this` used within called function points to new object created. (Fourth is it returns `this` which is that new object)

1. Creates new object:

```js
function a() {
  return 'hello'
}

const b = new a()

console.log(b) //  { }
```

2. Connects new object's `__proto__` to function's `.prototype`

```js
function A() {
  return 'hello'
}

A.prototype.name = 'world'

const b = new A()

console.log(b)

console.log(b.name)
```

3. `this` used within called function points to new object created

```js
function A() {
  this.name = 'hello'
}

const b = new A()

console.log(b)

console.log(b.name)
```

###### Just for fun:

```js
function A() {
  this.name = 'hello'
}

A.prototype.name = 'world'

const b = new A()

// console.log(b)

// console.log(b.name)
```

---

### Loops with Prototypes

- Loops can behave differently when objects have chained prototype objects.
- The for...in statement iterates over all non-Symbol, enumerable properties of an object.

```js
const obj = {
  firstName: 'Tyler',
  lastName: 'Clark'
}

let n = 0
for (let property in obj) {
  n++
}
console.log(n) // 2
```

vs.

```js
const obj = {
  firstName: 'Tyler',
  lastName: 'Clark'
}

const protoObj = {
  hair: 'Brown'
}

Object.setPrototypeOf(obj, protoObj)

let n = 0
for (let property in obj) {
  n++
}
console.log(n) // 3
```

- In order to avoid this situation, you need to add a check

```js
const obj = {
  firstName: 'Tyler',
  lastName: 'Clark'
}

const protoObj = {
  lastName: 'Brown'
}

Object.setPrototypeOf(obj, protoObj)

let n = 0
for (let property in obj) {
  if (obj.hasOwnProperty(property)) {
    n++
  }
}
console.log(n) // 2
```

- Does not map over the nested Object.prototype properties because those are not Enumerable
- Same reason why loops don't iterate on the `.length` property in arrays

---

### `Object.create`

- `Object.create` creates a object and gives the ability to point another object to be the new object's prototype.

```js
const house = {
  houseColor(color) {
    console.log(`${color} is a good color`)
  }
}

const myHouse = Object.create(house) // { }

myHouse.houseColor('blue') // blue is a good color
```
