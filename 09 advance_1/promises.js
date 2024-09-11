const promiseone = new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log('async task is complete')
    resolve()
   },1000) 

})

promiseone.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 revolved")
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usrname: "ayush",email: "chai@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user)
})
async function getallusers() {
    fetch
    
}
