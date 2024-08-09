//reduce function

const mynums=[1,2,3]
const mytotal = mynums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval : ${currval}`)

    return acc+currval
},0)


const totals=mynums.reduce((acc,curr) => acc+curr,0)
console.log(mytotal)
console.log(totals)


const shop=[
    {
        item: "js",
        price:20000
    },
    {
        item: "cpp",
        price:25000
    },
    {
        item: "dev",
        price:20800
    },
]

const topay=shop.reduce((acc,item)=> acc + item.price,0)
console.log(topay)


