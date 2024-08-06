const user={
    username: "ayush",
    price:999,

    welcome: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }

}
user.welcome()
user.username="sakshi"
user.welcome()

// function chai()
// {
//     console.log(this)
// }
// chai()

const chai=() => {
    let user="ayush"
    console.log(this)
}
chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }
 console.log(addtwo(7,4))

const addtwo = (num1,num2) =>  num1+num2

console.log(addtwo(7,4))

// if we use curly braces we have to use return but when we use paranthes we dont have to write return

