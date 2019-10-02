// Example 1

const a = { val: 0 }

a.valueOf = function() {
  return ++this.val
}

console.log(a == 1 && a == 2 && a == 3) //true

/* ********************************** */

// Example 2

const b = new Number(0)
let val = 0 // why is this needed? Extra credit

b.valueOf = function() {
  return ++val
}

console.log(b == 1 && b == 2 && b == 3) // true
