/*****************************  Exercise 1  ********************************************** */

class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1
    }
    return n * 3
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n)
  }
}

console.log(Triple.triple()) // 3
console.log(Triple.triple(6)) // 18
console.log(BiggerTriple.triple(3)) // 81

/*****************************  Exercise 2  ********************************************** */

function Animal() {}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`)
}

function Dog(name) {
  this.name = name
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype)

const a = new Dog('Duke')

a.speak() // Duke makes a noise.

/*****************************  Another Exercise 2 Answer ********************************************** */

const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

function Dog(name) {
  this.name = name
}

Object.setPrototypeOf(Dog.prototype, Animal)

const a = new Dog('Duke')

a.speak() // Duke makes a noise.
