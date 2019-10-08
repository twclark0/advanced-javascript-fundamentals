## `this`

- Simply put, `this` references the execution context of a function's call. Which is determined how the function was called and in non–strict mode, is always a reference to an object.
- Can be different depending on how the function is called... In other words you cannot look at a function and know what the `this` context will be. You have to see how the function is called at runtime. Functions can be invoked with `()` individually (default binding), `()` on a context object, methods like `call`, and the `new` keyword.
- Usually one of the most difficult keyword to understand
- Works differently than most other languages

---

#### Implicit binding

- *Context object*: where `this` is probably intended to be the object the function lives on:

```js
const person = {
    name: 'tyler',
    getName() {
        return `${this.name} is my first name`
    }
}

person.getName() // 'tyler is my first name'

```

- Invoking `()` individually: *Default binding* where it is called with a context and `this` defaults to the global
- Behaves differently depending on `strict mode` or `non-strict mode`

```js
var name = 'tyler'


function getName() {
    return `${this.name} is my first name`
}

getName() // 'tyler is my first name'

```

- This example only works with `var` because it puts it on the window / global space

#### Explicit binding

- `apply`, `call`, `bind`: Takes a parameter which assigns the `this` context explicitly.

```js
const person = {
    name: 'tyler',
}

function getName() {
    return `${this.name} is my first name`
}

getName.call(person) // 'tyler is my first name'

```

```js
const person = {
    name: 'tyler',
}

function getName() {
    return `${this.name} is my first name`
}

getName.apply(person) // 'tyler is my first name'

```

- `new` keyword: Does four main things. Creates a new object, points `this` to new object, link's `.prototype` to new object `__proto__`, and returns `this` (which is that new object)

```js

function a() {
  this.name = 'hello'
}

const b = new a() // {name: "hello"}

console.log(b.name) // 'hello'


```

---

#### Clashing of contexts

- Look at call site of function

---

#### `this` and prototypes


---



- https://egghead.io/lessons/javascript-understand-javascripts-this-keyword-within-prototypes
- https://egghead.io/lessons/javascript-replicate-javascript-constructor-inheritance-with-simple-objects-oloo
