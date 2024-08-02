// NUMBERS:
const score=400

console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.__proto__)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const other=1123.8966

console.log(other.toPrecision(3))

const hund=10000000000000
console.log(hund.toLocaleString())

console.log(Number.MAX_VALUE)

// MATHS:

console.log(Math)
console.log(Math.abs(-4567))

console.log(Math.round(4.4))
console.log(Math.ceil(4.2))
console.log(Math.floor(5.9999))

console.log(Math.random()) //its value will always be between 0 and 1

console.log(Math.random()*10 + 1) //this will give least number to be only 1
console.log((Math.random()*10) + 1)

const min=10
const max=20

// Math.random() * (max-min+1)

console.log(Math.floor(Math.random() * (max - min +1)) + min)