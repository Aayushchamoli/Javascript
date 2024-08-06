// let a= 10;
// const b= 20;
// var c=30;


if (true){
    let a= 10;
    const b= 20;
    var c=30;
}

// console.log(a) they all will give error as they are defines the brackets so their scope is inside the bracket only
// console.log(b)
console.log(c) //this will run only not the above ones


function one (){
    const username="ayush"

    function two (){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

    two()

}
one()


if(true){
    const user="ayush"
    if(user === "ayush")
    {
        const web=" insta"
        console.log(user+web)
    }
    //console.log(web)

}
//console.log(user)


function sum(value)
{
    return value+1
}

sum(9)

const addtwo=function(num){
    return num+2
}
addtwo(5)

