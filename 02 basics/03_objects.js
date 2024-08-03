// declaration
// singleton 
// Object.create

const mysym= Symbol("key1")


const user={
    name: "ayush",
    age:18,
    [mysym]:"mykey1",
    location: "bhiwadi",
    isloggedin: false,
    days: "monday"

}

// hot to access the object
console.log(user["age"])
console.log(user[mysym])


// how to change values
user.location="dehradun"
// Object.freeze(user)
console.log(user)

user.greetings=function(){
    console.log("hello user")
}
console.log(user.greetings());

user.greetings2=function(){
    console.log(`hello ayush ${this.name}`)

}
console.log(user.greetings())

console.log(user.greetings2())

