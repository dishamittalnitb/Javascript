// Objects

// Objects can be declared by literals or constructors 
// singleton --> declared using constructors i.e, unique peice of object [Object.create]
// Whenever we declare using constructor --> singleton object is formed
// Whenevr we declare using literals -->singleton object is not formed


//object literals
//In arrays we dont get to define our keys but while creating
//objects in javascript we can define our own keys
//The keys like name are tracked as string "name" inside the computer

const mySymbol = Symbol("key1")

const JsUser = {
    name : "Disha",
    "Full Name" : "Disha Mittal",
    [mySymbol]:"mykey1",
    age : 18,
    location: "Delhi NCR",
    email: "dishamittalnitb@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //another way to access the js objects

console.log(JsUser["Full Name"]) //can only be accessed in this way

console.log(typeof mySymbol)
console.log(typeof JsUser[mySymbol]) //??  It is showing string
console.log(JsUser[mySymbol])

JsUser.email = "mittaldisha126@gmail.com"
console.log(JsUser.email)

//Object.freeze(JsUser)
JsUser.email = "HatedLulu@gmail.com"

console.log(JsUser)

//declaring functions in javascript
JsUser.greetings = function()
{
    console.log("Hello JsUser")
}

JsUser.greetingsTwo = function()
{
    console.log(`Hello Js User, ${this.name}`)
}
//Printing functions in javascript

console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())




