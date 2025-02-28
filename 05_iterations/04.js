const myObj  = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

//for in loop

// for (const key in myObj) {
//     console.log(key)
// }

// for (const key in myObj) {
//     console.log(myObj[key])
// }

for (const key in myObj) {
    console.log(`${key} is short for ${myObj[key]}`)
}

const programming = ["js", "cpp", "python", "java", "ruby"]
for (const key in programming) {
   console.log(programming[key])
}
