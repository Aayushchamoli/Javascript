const coding=['js','cpp','java']

const values=coding.forEach( (item) => {
    console.log(item)
    
})
console.log(values)

// for each will never return any value its return type is  undefeined

 const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynum.filter((num) => num > 4 )


const newnum=[]
mynum.forEach((num)=>{
    if(num>4){
        newnum.push(num)
    }
})

console.log(newnum)






