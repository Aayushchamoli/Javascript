const nums=[1,2,3,4,5,6,7,8,9,10]
//const newnums=nums.map((num) => num+10)
//console.log(newnums)



const newnums=nums
        .map( (num) => num*10)
        .map((num)=> num+1)
        .filter((num)=> num>40)
        console.log(newnums)

