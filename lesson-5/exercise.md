### We'll do it together!

**Question 1:** What is the first `console.log` value within `foo()`.


```js
var a = 'tyler'

function foo() {
    console.log(a)
    var a = 'clark'
}

foo()

```

---

**Question 2:** What is the  `console.log` value within `foo()`.

```js
let a = 'tyler'

function foo() {
    console.log(a)
    let a = 'clark'
}

foo()

```

---

Question 3: What is the  `console.log` value within `foo()`.


```js
var a = 'tyler'

function foo() {
    console.log(a)
    a = 'clark'
}

foo()
```

Another look at this example:

```js
function foo() {
    console.log(a) // ReferenceError: a is not defined
    a = 'clark'
}

foo()

```

---


Question 4: What happens when we run the following code?

```js
myFunction()

var myFunction = function() {
  console.log('hello world');
}

```