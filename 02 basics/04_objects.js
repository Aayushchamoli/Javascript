//  singleton through constructor

const tinderuser= new Object()

console.log(tinderuser) 

tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.islog=false

// console.log(tinderuser)

const regularuser={
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            first:"ayush",
            last:"chamoli"
        }

    }
}

console.log(regularuser.fullname.userfullname.first)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)
const obj3={...obj1,...obj2}
console.log(obj3)


console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
 
