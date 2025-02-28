//reduce method

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currentvalue) {
//     console.log(`acc: ${acc} and current value: ${currentvalue}`)
//     return acc + currentvalue
// }, 0)

const myTotal = myNums.reduce((acc,curr)=> acc+curr, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python",
        price: 3999
    },
    {
        itemname: "data scince",
        price: 15000
    },
    {
        itemname: "android dev",
        price: 2999
    }
]

const totalprice = shoppingCart.reduce((acc, item)=>(acc + item.price),0)
console.log(totalprice)