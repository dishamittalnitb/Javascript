//string interpolations

const name = "Disha"
const repCount = 6
console.log(`Hello my name is ${name} and my repo count is ${repCount}`)

//Learn about string and its methods from console on inspect and mdn

//Numbers and maths

const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length) //Nuber gets converted to string and then method of strings can be applied on it

const hundreds =10000000000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 console.log(typeof Math)
 console.log(Math.sqrt(56))
 //and mores such functions

 console.log(Math.random())
 console.log((Math.random()*10) + 1)
 console.log(Math.floor(Math.random()*10) + 1)

 const min=1
 const max=6

 console.log(Math.floor(Math.random()* (max-min+1)) + min)