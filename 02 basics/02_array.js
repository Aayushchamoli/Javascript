
const a=["ayush","sakshi","aviral"]
const b=["krishna","munjal","arya"]
a.push(b)
// console.log(a)


const newhero =a.concat(b)
console.log(newhero)
// push and concat gives same type of answers

// no it does not lol

const all=a.concat(b)
console.log(all)

const allnew=[...a,...b]
console.log(allnew)

const newarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const ayush = newarr.flat(Infinity)
console.log(ayush)

console.log(Array.isArray("newarr"))
console.log(Array.from("newarr"))

let score1=100;
let scroe2=200
let score3=300

console.log(Array.of(score1,scroe2,score3))
 