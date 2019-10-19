# Strict mode

- Coined as the opposite of "sloppy mode". It intentionally has different semantics from normal code.
- If you are using compilers like babel, it is turned out automatically. ES6 JavaScript modules are automatically Other than that, it needs to be added to the file
- `"use strict"` is the syntax
- Catches silent errors and throws them, fixes mistakes that makes it difficult for JS engines to perform optimizations, and prohibits some syntax likely to be defined in future versions of ECMAScript
- Works within entire scripts or to individual functions. Does not apply to block statements.

Doesn't allow global vars:

```js
'use strict'

name = 'tyler' // throws a ReferenceError
```

Doesn't allow assignment to a non-writable global and/or property. (Same for getters on object )

```js
'use strict'

var undefined = 5 // throws a TypeError
var Infinity = 5 // throws a TypeError

var name = {}
Object.defineProperty(name, 'first', { value: 'clark', writable: false })
name.first = 'tyler' // throws a TypeError
```

Throws error when attempting to delete undeletable properties:

```js
'use strict'
delete Object.prototype // throws a TypeError
```

Throws when functions have same param names

```js
function name(first, first) { // syntax error
  'use strict';
  return first
}

```

#### Strict mode and `this`

- `this` is not auto-boxed into an object. Auto-boxing is a performance cost...
- When `this` references the global object in browsers, strict mode returns undefined... because it is a security hazard.

```js
'use strict'

function name() {
  return this
}

name() // undefined
```

#### Strict mode and the future of JS

- Strict mode makes guesses on names that might be implemented in later ECMAScript versions.
- These words are `implements`, `interface`, `package`, `private`, `protected`, and `public`.

```js
'use strict'

var implements = 'tyler' // error: Binding implements in strict mode
```
