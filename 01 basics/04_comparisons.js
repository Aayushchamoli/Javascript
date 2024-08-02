console.log(2>1)
console.log(2>=1)
//  problem arises when ther are no same data types
console.log("2">1)
console.log(null>0)
console.log(null==0)



console.log(null>=0)
// this above statement will be true cause equatlity == works diferently than comaprisons > < comparisons convert null into number treating it as zero

console.log(undefined ==0)
// for undefiened it will always return in false

// === it check datatypes

console.log("2"==2) //return true
console.log("2"===2) //return false as it checks datatypes
