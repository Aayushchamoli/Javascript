const myobj={
    js: 'java',
    cpp: 'c++',
    r: 'react'
}

for (const key in myobj) {
    console.log(myobj[key]);
    
}

const programming=['js','cpp','c']

for (const key in programming) {
    console.log(key)
    console.log(programming[key])
    
}

//important
//map is not iterable with for in loop

