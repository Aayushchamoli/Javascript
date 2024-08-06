// immediately invoked function expression (IIFE)

(function chai(){
     console.log("dbconected")
})();
// these type of function do require semicolon at the end for other code to run

( () => {
    console.log("connect")
})();



( (name) => {
    console.log(`your name is ${name}`)
})("ayush")


