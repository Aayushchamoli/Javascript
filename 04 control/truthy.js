const email="ayush@yoi.in"

if(email)
{
    console.log("got email")
}
else
{
    console.log("dont have email")
}
const emails=""

if(emails)
{
    console.log("got email")
}
else
{
    console.log("dont have email")
}
const emailz=[]

if(emailz)
{
    console.log("got email")
}
else
{
    console.log("dont have email")
}
const emailu=[]

if(emailu.length===0)
{
    console.log("got email")
}
else
{
    console.log("dont have email")
}

// falsy value
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN
 

// truthy value

// "0"
// 'false'
// " "
// []
// {}
// function(){}


const empobj={}

if(Object.keys(empobj).length===0)
{
    console.log("object is empty")
}


// nullish coalescing operator (??): null undefined

let val1;
val1=5??10
val1=null??10
val1=undefined??50
val1 = null ?? 10??26
console.log(val1)


// terniary opeartors

// condition ? true : false

const icetea=700
icetea<=80?console.log("less than 80") : console.log("more than 80")












