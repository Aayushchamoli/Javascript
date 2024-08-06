function myname (){
    console.log("ayush")
    console.log("chamoli")
}

myname() //this is how you call function

// function add( num1 , num2){
// console.log(num1+num2)
// }

const res=add(3,5)
console.log(res)//it comes undefined 


function add( num1 , num2){
    let result = num1+ num2
    // console.log("ayush chamoli")
    return result
}
    
const result=add(3,5)
// console.log(result)

function login(username){
    if(username=== undefined){
        // console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(login())


function login(username="deepika"){
    if(username=== undefined){
        // console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(login())


// when you dont know how many paramenters will come

function calculatecartprice(...num1){
    return num1

}
console.log(calculatecartprice(200,300,5400))

// passing objects
const user={
    username: "ayush",
    price: 100
}

function handle(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handle(user)

// passing arrays
const arr=[100,200,300,400,500]
function second(getarray){
    return getarray[1]

}
console.log(second(arr))