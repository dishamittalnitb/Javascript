//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    console.log(val)
})

coding.forEach((item)=> {
    console.log(item)
})

//One more intesting way of using foreach loop

function printMe(item){
    console.log(item)
}
coding.forEach(printMe) //you just have to give the reference of the function and not execute it

coding.forEach((item, index, arr) => {
    console.log(item,index,arr)
})

const lang = [
    {
        langname: "Javascript",
        filename: "Js"
    },
    {
        langname: "C++",
        filename: "cpp"
    },
    {
        langname: "Python",
        filename: "py"
    }
]

lang.forEach((item)=>{
    console.log(item.langname, item.filename)
})

//an array of objects

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((nums)=> nums>4)
// console.log(newNums)
// const newNums = myNums.filter((nums)=> {
//     return nums>4
// })
// console.log(newNums)

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })

// console.log(newNums)



















































