//dates:

let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())

console.log(typeof mydate);

let my=new Date(2023,8,5)
console.log(my.toDateString())


let mydat=new Date("2026-12-4")
console.log(mydat.toDateString())

let timestamp=Date.now()
console.log(timestamp)
console.log(my.getTime())


// how to convert in seconds

console.log(Math.floor(Date.now()/1000))

mydate.toLocaleString('default',{
    weekday: "narrow",
   
})

console.log(mydate)








