// Control flow statements
// If

// if(condition)
// {

// }

// Comparison operators ---> <, >, <=, >=, ==, === (strict equal), !=, !==

// +++++++++++++++Implicit Scope for (if declaration)++++++++++++++++ 

const balance =1000
if(balance > 500) console.log("Balance is greater than 500"), console.log(`Balanec is: ${balance}`)

// We can also execute multiple line statements in if using commas but it is not a good practice

// if, else if and else statements

// Falsy Values ---> false, 0, -0, BigInt 0n, "", null, undefined, NaN (Not a Number)
//True Values ---> "0", "false", " ", [], {}, function(){} (Empty function)

// to check if the array is empty or not then we can use the method of length
// if(userEmail.length === 0)
// {
//    console.log("Array is empty")
// }

//To detect if the object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is emnpty")
}



// Nullish Coalescing Operator (??): null, undefined

let val1
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10
console.log(val1)
val1 = undefined ?? 10
console.log(val1)
val1 = null ?? undefined ?? 20
console.log(val1)

// Ternary Operator

//condition ? true : false

const price = 40
price > 90 ? console.log("Greater than 90") : console.log("Less than 90")