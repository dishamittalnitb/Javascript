// Array - specific loop
// for of loop

const array = [1,2,3,4,5]

for (const num of array) {
    console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(greet)
}

//Maps ---> It does not take duplicate values

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value)
}


//Objects are not iteratable using forof loops.....maps are iteratable using forof loops

// const myObject = 
// {
//     game1 : "NFS",
//     game2 : "Spiderman"
// }

// for (const [key,value] of myOject) {
//     console.log(key, ":-", value)
// }

// There are other ways to iterate objetcs

