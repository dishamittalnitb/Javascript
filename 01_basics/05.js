//Comparisons of different datatypes

console.log("2">1)
console.log("02">1) //typescript - this language does not allow 
//for comparisons of different datatypes but javascript implements
//type converison and gives error

console.log(null>0)
console.log(null==0)
console.log(null>=0) //comparison operator converts null to 0
                    //but equity operator (==) does not do that

//=== --> strict check also checks the datatype of operands
console.log("2"===2) //gives false