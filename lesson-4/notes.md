## `this`

- Simply put, `this` references the execution context of a function's call. Which is determined how the function was called and in non–strict mode, is always a reference to an object.
- Can be different depending on how the function is called... In other words you cannot look at a function and know what the `this` context will be. You have to see how the function is called at runtime.
- Important to understand how functions are invoked... Functions can be invoked with `()` individually (implicit binding), methods like `call` (explicit binding), or the `new` keyword.

---

#### Implicit binding

-Option 1: _Context object_: where `this` is probably intended to be the object the function lives on:

- From mdn: "When a function is called as a method of an object, its this is set to the object the method is called on."

```js
const person = {
  firstName: 'tyler',
  getName() {
    return `${this.firstName} is my first name`
  }
}

person.getName() // 'tyler is my first name'
```

```js
const person = {
  value: {
    firstName: 'tyler',
    getName() {
      return `${this.firstName} is my first name`
    }
  }
}

person.value.getName() // 'tyler is my first name'
```

- Invoking `()` individually: _Default binding_ where it is called with a context and `this` defaults to the global
- Behaves differently depending on `strict mode` or `non-strict mode`

```js
var firstName = 'tyler'

function getName() {
  return `${this.firstName} is my first name`
}

getName() // 'tyler is my first name'
```

- This example only works with `var` because it puts it on the window / global space

- Look at call site of function, where is it actually called?

```js
const person = {
  firstName: 'tyler',
  getName() {
    console.log(`${this.firstName} is my first name`)
  }
}

window.setInterval(person.getName, 3000) // "undefined is my first name"
```

Still confused? Here's another example

```js
const person = {
  firstName: 'tyler',
  getName() {
    return `${this.firstName} is my first name`
  }
}

const anotherPerson = {}

anotherPerson.getName = person.getName

anotherPerson.getName() // "undefined is my first name"
```

#### Explicit binding

- `apply`, `call`, `bind`: Takes a parameter which assigns the `this` context explicitly.

```js
const person = {
  firstName: 'tyler'
}

function getName() {
  return `${this.firstName} is my first name`
}

getName.call(person) // 'tyler is my first name'
```

```js
const person = {
  firstName: 'tyler'
}

function getName() {
  return `${this.firstName} is my first name`
}

getName.apply(person) // 'tyler is my first name'
```

- `new` keyword: Does three main things. Creates a new object, points `this` to new object, link's `.prototype` to new object `__proto__`, and returns `this` (which is that new object)

```js
function a() {
  this.firstName = 'hello'
}

const b = new a() // {firstName: "hello"}

console.log(b.firstName) // 'hello'
```

---

###### Arrow functions

- Arrow functions have no concept of `this`. If you use a `this` inside of a arrow function it will act like any other variable. It will lexically resolve to the enclosing scope looking for a this.
- It's not a fix all solution for our troubles with `this`

```js
const person = {
  firstName: 'tyler',
  getName: () => {
    console.log(`${this.firstName} is my first name`)
  }
}

window.setInterval(person.getName, 3000) // "undefined is my first name"

person.getName() // "undefined is my first name"
```

- First need to understand lexical scoping. Lexical scoping references the parent _function_ context / scope. This is the enclosing function or the window. Object curly bracket's do not represent "scope". We are looking for function curlys for scope.

```js
const person = {
  firstName: 'tyler',
  getName: () => {
    return function() {
      console.log(`${this.firstName} is my first name`)
    }
  }
}

window.setInterval(person.getName(), 3000) // "undefined is my first name"
```

**wrong**

```js
const person = {
  firstName: 'tyler',
  getName() {
    window.setInterval(function() {
      console.log(`${this.firstName} is my first name`)
    }, 3000)
  }
}

person.getName() // "undefined is my first name"
```

**wrong**

```js
const person = {
  firstName: 'tyler',
  getName: () => {
    window.setInterval(function() {
      console.log(`${this.firstName} is my first name`)
    }, 3000)
  }
}

person.getName() // "undefined is my first name"
```

**answer**

```js
const person = {
  firstName: 'tyler',
  getName() {
    window.setInterval(() => {
      console.log(`${this.firstName} is my first name`)
    }, 3000)
  }
}

person.getName() // "tyler is my first name"
```

###### Arrow function gotchas

- Cannot self reference with recursion.
- Do not have a name, it is anonymous (unless assigned to a variable)
- Cannot be used with the `new` keyword
- `call` or `apply` first param for `this` is ignored

---

#### `this` and prototypes

- Works similar to looking up properties on an context object. `this` will step through the prototype chain looking for a property... because prototypes are just objects.
- getters and setters

```js
const proto = {
  get myName() {
    return this.firstName
  }
}

const person = Object.create(proto) // { }

person.firstName = 'tyler' // { firstName: 'tyler' }

console.log(person.myName) // 'tyler'
```

- Arrow functions rules still apply

```js
const proto = {
  myName: () => {
    return this.firstName
  }
}

const person = Object.create(proto) // { }

person.firstName = 'tyler' // { firstName: 'tyler' }

person.myName() // 'undefined'
```

---
