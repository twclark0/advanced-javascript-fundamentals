/*****************************  Exercise 1  ********************************************** */

class Triple {
  static triple(n) {
    // need code here
  }
}

class DoubleTheTriple extends Triple {
  static double(n) {
    // need code here.. make sure to use the triple function on the Triple class
  }
}

console.log(Triple.triple(1)) // 3
console.log(Triple.triple(6)) // 18
console.log(DoubleTheTriple.double(2)) // 36
console.log(DoubleTheTriple.double(3)) // 81

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
