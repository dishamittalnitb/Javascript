//objects part two -->constructor declaration

//const tinderUser = {}  -----> This is a non-singleton object
const tinderUser = new Object()  // -----> This is a singleton object

tinderUser.id = "123abc"
tinderUser.name = "LuLa"
tinderUser.isLoggedIn = false

console.log(tinderUser)


// Nested Objecrts

const regularUser = {
    email: "Lula@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Disha",
            lastname : "Mittal"
        }
    }
}

//You can go to any depths and access the object
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

//optional chainning ---> uses "?" ----> Use the value if it exists



//Combining two Objects
const obj1 ={ 1: "a", 2: "b"}
const obj2 ={ 3: "c", 4: "d"}

const obj3 =Object.assign({},obj1,obj2) //All the elements of object 1 and object 2 are copied into the empty string 
                                        // and returns the modified string
console.log(obj3)

const obj3_usingspreadoperator = {...obj1,...obj2}
console.log(obj3_usingspreadoperator)

//An array f objects and how to access them

const users = [
    {
        id:1,
        name:"Disha"
    },
    {
        id:2,
        name: "Karuna"
    },
    {
        id:3,
        name: "Rishabh"
    }

]

console.log(`The id is : ${users[1].id} and the name of the user is: ${users[1].name}`)

//Acessing object keys

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// de-structruing of objects

const course = 
{
    coursename: "Js in hindi",
    pricce: 999,
    courseInstructor: "Hitesh Choudhary"
}

const {courseInstructor: Instructor} = course
console.log(Instructor)

