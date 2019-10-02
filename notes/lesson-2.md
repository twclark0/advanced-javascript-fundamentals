## Coercion

- Think of it as "Conversion". Changing types from primitive to primitive or object to primitive.
- To understand your code, you have to learn to interpret code like JS
- Coercion happens more than you probably think. It is unavoidable... But doesn't have to be a black box... See below...
- A couple prototypes have a `.toString()` for converting it to a string primitive.
- Work around for string to object is `JSON.parse` and `JSON.stringify`.

---

#### Implicit Coercion

- Abstracts away the lower details to provide more focus for the developer. Are the explicit coercion distracting to the reader? Example: Template strings

```js
const str = `Hello, I have ${someNumber} eyes`
```

- *First*  JS will do is call the .valueOf function on the wrapper object prototype chain to determine it's primitive value.
- Afterwards it will coerce the type into the similar type to complete the operation.


- Using prototype methods on primitive... Boxing is implicit coercion
- Overload operators like the `+`
- Truthy & Falsy checks

```js
if (arr.length) {
  // do something while arr.length is truthy?
  // vs. do something while arr.length > 0?
}
```

- `==` (Using valueOf on prototype to determine what type it is. Then calls needed method to coerce into right type for comparison.. which then runs same algorithm as `===`)

---

#### Explicit Coercion

- Using the native functions (`String`, `Boolean`, `Number`)

```js
const str = `Hello, I have ${String(someNumber)} eyes`
```

---

##### toString()

- String(val)
- .toString()
- Using the `+` operator

```js
const num = (1).toString()
// "1"

const arr = [1, 2, 3].toString()

// "1, 2, 3"

const nestedArr = [[], [], []].toString()

// ",,"

const arrEmpty = [null, undefined].toString()

// ","

const obj = { a: 1 }.toString()

// "[object Object]"

const stringNumber = 2 + ''

// '2'
```

##### toNumber()

- `Number(val)`
- `parseInt(val)`
- `parseFloat(val)`

```js
const empty = Number('') // 0

const notANumber = Number('.') // NaN

const zeroDot = Number('0.') // 0

const falses = Number(false) // 0

const trues = Number(true) // 1

const nulls = Number(null) // 0

const undef = Number(undefined) // NaN

const arr = [''] // 0

const arrValue = [1, 2] // NaN
```


##### toBoolean()

- Looks to see if value is falsy or truthy
- `Boolean(val)`
- Comparing the value `==` or `===`

Falsy: `""`, `0`, `-0`, `null`, `NaN`, `false`, `undefined`
Truthy: ....everything else.
