const arm = {
  hasArm() {
    return true
  }
}

const leg = {
  hasLeg() {
    return false
  }
}

const head = {
  hasHead() {
    return 'yes'
  }
}

Object.setPrototypeOf(arm, leg)
Object.setPrototypeOf(leg, head)

const person = Object.create(arm)

person.hasArm() // true

person.hasLeg() // false

person.hasHead() // 'yes'
