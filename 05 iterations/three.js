// array specific loops
//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const str="hello world"
for (const greet of str) {
    if(greet===" ") continue
    console.log(`each caharcter is ${greet}`)
}

// maps

const map=new Map()
map.set("IN","india")
map.set("pak","pakistan")
map.set("us","america")
map.set("IN","india")

console.log(map)

for (const [key,value] of map) {
    console.log(key)
    console.log(value)
    
}

const myobj={
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

for (const [key,value] of myobj) {
    console.log(key)
    console.log(value)
}// objects are not iterabale through for of loop


