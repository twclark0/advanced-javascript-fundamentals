# Scope & Hoisting

- Contains any assignments of variables and functions. Cannot access "buckets" inward, just outward.
- Many will say "best practice" is to make private as much as you can. This mediates naming collisions and it is prevented from being used elsewhere. Lots of public variables couples functionality and makes it difficult to refactor.

#### Lexical Scope

- Think of lexical related to "author" time or at "compile time" or "fixed". It is not decided on when or how the code is executed ("runtime").
- Other languages have dynamic scoping. Think the opposite of lexical, it's at "runtime". A function references scoped variables at execution. This does not work in JS, however we have the `this` keyword that gives us that dynamic scoping.


```js
var name = 'tyler'

function findName() {
    var name = 'clark'
    return name
}

console.log(findName())  //'clark'

```

dynamic scope example:

```js
var name = 'tyler'

function findName() {
    return name
}

function findAnotherName() {
    var name = 'clark'
    return findName()
}

console.log(findAnotherName())  //'tyler' but if it was dynamic scope it would print 'clark'

```

#### IIFE pattern

- Means the function is executed immediately after the completion of the definition.
- This does not put the function on the global space. Meaning the function cannot be access anywhere else
- Magic behind it is the initial wrapping of the function with `()`, which is called the `grouping operator`.. this makes it an expression because it is returning something.
- Function expressions are not accessed in the global namespace

```js
(function findName() {
    return 'hello'
})()

```

arrow function example:

```js
(() =>  'hello')()
```

#### Block scoping

- Defined with opening and closing `{}`. It is not scoped until there is an assignment created inside of it. It is overloaded with the object literal.
- Objects are not scoped so you cannot go by the global rule that all `{}` means a scope.

```js
var firstName = 'tyler'

{
    var firstName = 'clark'
    console.log(firstName) // clark
}

console.log(firstName) // clark

```

#### `var`, `let`, `const`

- `var` declarations are processed before any code is executed. It's scope is its **current execution context**.
- Re-declaring it without a value, will not lose it's initial value.
- It's declaration is equal to `undefined` and hoisted to the top of it's execution context.

```js
var firstName = 'tyler'

function x() {
  var firstName = 'clark'
  console.log(firstName) // 'clark'
}

console.log(firstName) // 'tyler'
```

- Any assignment without a variable statement puts it on the global object, regardless of it's execution context

```js
function x() {
  firstName = 'clark'
  console.log(firstName) // 'clark'
}
x()

console.log(firstName) // 'clark'
```

  ---

  - `let` is different from `var` as it's scope is blocked (statement or expression).
  - `let` does not create properties on the window object unlike `var`.
  - `let` is only initialized to value when the parser evaluates it. In other words it is not hoisted to top of scope with initial value of `undefined` like `var`.
  - Re-declartion of `let` throws an SyntaxError, unlike `var`


```js
var firstName = 'tyler'

{
    var firstName = 'clark'
    console.log(firstName) // clark
}

console.log(firstName) // clark
```

vs.

```js
let firstName = 'tyler'

{
    let firstName = 'clark'
    console.log(firstName) // clark
}

console.log(firstName) // tyler
```

---

- `const` very similar to `let`.
- Blocked scoped not scoped to it's execution context
- Major difference between it and `let` is as mdn states: `The value of a constant can't be changed through reassignment, and it can't be redeclared`
- Gotcha: Does not do deep equals on object types. Like mutating values in an array or object

Scope example:

```js
const firstName = 'tyler'

{
    const firstName = 'clark'
    console.log(firstName) // clark
}

console.log(firstName) // tyler
```

Renaming error example:

```js
const firstName = 'tyler'
firstName = 'clark' // TypeError: Assignment to constant variable.

console.log(firstName)

```

```js
const firstName = ['tyler']
firstName.length = 0

console.log(firstName) // []

```