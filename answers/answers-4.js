function Foo(name) {
  this.name = name
}

Foo.prototype.myName = function() {
  return this.name
}

function Bar(name) {
  Foo.call(this, name) // Answer to step 1
}

Bar.prototype = Foo.prototype // Answer to step 2

const a = new Bar('tyler')

console.log(a.myName())
