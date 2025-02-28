// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    console.log(`DB Connected`)
}) ();  //named IIFE

//    ()()  -------->First parenthesis contains the function defenitiona nd the second parenthesis contains the function call
// ; semi column is necessary to end the code

// Points to remember about IIFE
// ---> There is problem of pollution due to global scope
// ---> Function which is immediately incoked is called as IIFE

((name) => {
    console.log(`DB Connected two ${name}`)
}) ("Disha");  //Unamed IIFE