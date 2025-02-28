//This is basically reference to current object

const user ={
    username: "Disha",
    price: 999,
    welcomeMessage :function()
    {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Mittal"
user.welcomeMessage()

console.log(this)   //gives an empty parenthesis
// When we run this in browser, we get windows as the global object

function chai()
{
    console.log(this) //printing this isnside a function
}

chai()

// const chai2 = function ()
// {
//     let username = "Disha"
//     console.log(this.username)
// }

// chai2()


// Arrow function Syntax
const chai2 = () => {
    let username = "Disha"
    console.log(this)
}

chai2()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4))

//++++++++++++++++++++++++ Implicit Declaration ++++++++++++++++++++//   (Very Very important)
const addTwo = (num1, num2) => (num1+num2)  ///You do not need to use the return keyword here, i.e if you wrap the function in parenthesis

console.log(addTwo(9,8))

//returning Object

const return_object = () => ({username:"Disha"})
console.log(return_object())


// What is the use of arrow function??



