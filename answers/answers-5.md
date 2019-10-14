### We'll do it together!

Question 1: What is the first `console.log` value within `foo()`. **ANSWER: `undefined`**


```js
var a = 'tyler'

function foo() {
    console.log(a)
    var a = 'clark'
}

foo()

```

---

Question 2: What is the  `console.log` value within `foo()`. **ANSWER: "Cannot access 'a' before initialization"**

```js
let a = 'tyler'

function foo() {
    console.log(a)
    let a = 'clark'
}

foo()

```

---

Question 3: What is the  `console.log` value within `foo()`. **ANSWER: "tyler"**


```js
var a = 'tyler'

function foo() {
    console.log(a)
    a = 'clark'
}

foo()
```

---

Question 4: What happens when we run the following code?  **ANSWER: "myFunction is not a function"**

```js
myFunction()

var myFunction = function() {
  console.log('hello world');
}

```