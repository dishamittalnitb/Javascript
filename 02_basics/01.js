// arrays

const myArray = [0,1,2,3,4,5]
const myHeroes =["Spiderman","Batman"]
const myArray2 = new Array(1,2,3,4)
console.log(myArray)

//push/pop operations
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)

//shift/unshift operations
myArray.unshift(8)
console.log(myArray)
myArray.shift()
console.log(myArray)

//quetionere methods

console.log(myArray.includes(9))
console.log(myArray.indexOf(3))

//convert array to string
const newArray = myArray.join()

//slice and splice
//myArray.slice(1,3) ---> Prints [1,2] and the array remains the same
//myArray.splice(1,3) ---> prints [1,2,3] but the array cahnges to [0,4,5] i,e, the remainging values
