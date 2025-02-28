const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((num)=> num + 10)

//chainning method
//const newNums = myNumbers.map((num)=> num*10).map((num)=>num + 1).filter((num)=>num>40)

// const newNums = myNumbers.map((nums)=>{
//     if(nums>5)
//     return nums
// })

const newNums = myNumbers.filter((num)=>{
    return num>5
})

console.log(newNums)

//Difference between map and filter is that ----> 
//Map ---> It iterates on every value and gives every value in the fpinal array.
//Filter ---> It filters out value and does not give every value in the array, only those that satisfy the condition.