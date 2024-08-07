// for loop

//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//  }

 for (let index = 0; index <= 10; index++) {
    const element = index
    if(element==5){
    console.log("5 is the best")
 }
 console.log(element)
 }

 for(let i=0;i<=10;i++)
 {
    console.log(`outer loop value: ${i}`);
    for (let j= 0; j <=10;j++) {
        //console.log(`inner loop is ${j} and ouer loop is ${i}`)
        console.log(i + '*' + j + ' = ' + i*j)
        
    }
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5)
//     {
//         console.log("5 is detected")
//         break
//     }
//     console.log(`value of i is ${index}`)
    
// }

for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log("5 is detected")
        continue
    }
    console.log(`value of i is ${index}`)
    
}

