const a = { val: 0 }

a.valueOf = function() {
  return ++this.val
}

console.log(a == 1 && a == 2 && a == 3) //true
