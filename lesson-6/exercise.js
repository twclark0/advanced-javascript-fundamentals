/*****************************  Exercise 1  ********************************************** */

class Triple {
  static triple(n) {
    // need code here
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    // need code here.. make sure to use the triple function on the Triple class
  }
}

console.log(Triple.triple()) // 3
console.log(Triple.triple(6)) // 18
console.log(BiggerTriple.triple(3)) // 81

/*****************************  Exercise 2  ********************************************** */

class Animal {
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super()
    this.name = name
  }
}

const a = new Dog('Duke')

a.speak() // Duke makes a noise.
