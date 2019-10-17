# ES6 Classes

- Simply just syntactic sugar over functions and the prototype chain.
- Can be a class declaration and class expression like functions.
- Unlike functions, classes are not hoisted
- Has many keywords specific to `class`, however it is still just sugar over functions and prototypes.

```js
class Workshop {}

typeof Workshop // "function"

```

```js
class WorkShop {}

```

Babel turns this into:

```js
// ...
// ...

var WorkShop = function WorkShop() {
  _classCallCheck(this, WorkShop);
};

```

#### `extends`

- Used only with `classes`
- It subclasses custom classes as well as built-in objects (functions).
- Would be the equivalent of using `Object.setPrototypeOf` with two functions ****Before using the `new` keyword*****.

```js
class Rectangle {}

class Square extends Rectangle {}

Object.getPrototypeOf(Square) // class Rectangle {}

//

const shape = new Square() // {}

Object.getPrototypeOf(shape) // { constructor: class Square}

Object.getPrototypeOf(Object.getPrototypeOf(shape)) // { constructor: class Rectangle}

```

- roughly translated to:


```js

function Rectangle() {}

function Square() {}

Object.setPrototypeOf(Square, Rectangle)

Object.getPrototypeOf(Square) // ƒ Rectangle() {}

//

const shape = new Square() // {}

Object.getPrototypeOf(shape) // { constructor: ƒ Square() }

Object.getPrototypeOf(Object.getPrototypeOf(shape)) // Native Object.prototype ??

```

#### `constructor`

- Special method specific to `class` and is what is called when the `new` keyword is used against the `class`.
- There can only be one `constructor` per class.
- `constructors` can use the word `super`.


```js
class Workshop
{
    constructor(name) {
        this.firstName = name
    }
}

const me = new Workshop('tyler')

// { firstName: 'tyler' }

```

#### `static`

- Sets the property to the function itself. Does not go on `.prototype` property but on the function (because it is also an object).
- They cannot be called on instances of the class (or function)... At least they are not meant to be, however there is still a way to do it by `.constructor.` and then the static method

```js
class Rectangle {
  static callRectangle() {
      return 'inheriting from Rectangle'
  }
}

Rectangle.callRectangle() // "inheriting from Rectangle"

```

- Is the same thing as:

```js
function Rectangle() {}

Rectangle.callRectangle = function() {
    return 'inheriting from Rectangle'
}

Rectangle.callRectangle() // "inheriting from Rectangle"

```

- Another example:

```js
class Rectangle {
    callRectangle() {
      return 'inheriting from Rectangle'
  }
}

Rectangle.callRectangle() // Rectangle.callRectangle is not a function

```

- That is similar to:

```js
function Rectangle() {}

Rectangle.prototype.callRectangle = function() {
    return 'inheriting from Rectangle'
}

Rectangle.callRectangle() // Rectangle.callRectangle is not a function

```


#### `super`

- From `MDN` "The super keyword is used to access and call functions on an object's parent."
- When `super` is used, it needs to be used before `this` can be used.
- Can be used to call the constructor or other (static or not) methods found on parent class (function)
- Can be used on object literals!

```js
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length)
    this.name = 'Square'
  }
}

const myShape = new Square(1)

// {name: "Square", height: 1, width: 1}
```

- `super` to access other methods

```js

class Rectangle {
  static callRectangle() {
      return 'inheriting from Rectangle'
  }
}

class Square extends Rectangle {
  static whoAmI() {
      return "I'm a square and " + super.callRectangle()
      }
}

Square.whoAmI() // "I'm a square and inheriting from Rectangle"

```

- When  the  `new` keyword is used, it's important understand how constructors play a role. i.e:

```js
class Animal {
    constructor(name) {
	    this.test = name
    }
}


class Cat extends Animal {
    constructor(name) {
        this.name = name
    }
}

const a = new Cat('Fuzzy') // {test: "Fuzzy", name: "Fuzzy"}

// Error Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

- `new` goes through classes on extends looking at constructors. In order to complete the chain  `super` is required in child constructors. Begins at highest parent classes constructors.
- Simply put, if you use a constructor method on a class that is extending another class, it has to call super.

This does not throw an error:

```js
class Animal {}

class Cat extends Animal {}

const a = new Cat('Fuzzy')  // { }

```

This throws an error:

```js
class Animal {}

class Cat extends Animal {
    constructor(name) {
	    this.test = name
    }
}

const a = new Cat('Fuzzy') // Must call super constructor in derived class before accessing 'this' or returning from derived constructor

```

This does not throw error:

```js
class Animal {
    constructor(name) {
	    this.test = name
    }
}

class Cat extends Animal {}

const a = new Cat('Fuzzy') // {test: "Fuzzy"}

```

This also does not throw an error because of `super`:

```js
class Animal {
    constructor(name) {
	    this.test = name
    }
}


class Cat extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
}

const a = new Cat('Fuzzy') // {test: "Fuzzy", name: "Fuzzy"}

```

Object literal example:

```js
const Animal = {
  method1() {
    console.log('method 1')
  }
}

const Cat = {
  method2() {
    super.method1()
  }
}

Object.setPrototypeOf(Cat, Animal)

Cat.method2() // "method 1"

```