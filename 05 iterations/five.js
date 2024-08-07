const coding=['js','cpp','java']

coding.forEach(function (item) {
    console.log(item)
}  )

coding.forEach((items) => {
    console.log(items)
})


function printMe(item)
{
    console.log(item);
}
coding.forEach(printMe)


const mycode=[
    {
        language: 'java',
        languagefilename: 'java'
    },

]
mycode.forEach((item) => {
    console.log(item.language)
})

