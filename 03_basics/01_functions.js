//function

function print_name()
{
    console.log("D")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    
}

//print_name --->reference of the function
//print_name() ---> to execute the function

print_name()

function add(number1, number2)    //There is no need to giver the datatype of parameters in js
{
    console.log(number1+number2)
}

add(7,7)
add(3,"4")
add(3,"a")
add(3, null)
add(3)
add()

function add_using_return (number1,number2)
{
    let result = number1+number2
    return result
    // return number1+number2     ---->Also we can talk about the scope of the variables
}

const result = add_using_return(3,4)
console.log(result)

function loginUsernameMessage(username){
    if(username === undefined)                  //if(username),if(!username)
    {                                           // function loginUsernameMessage(username ="SAM") ---->give default value
        console.log("Please Enter a username")
        return
    }
    return `${username} login successful!`
}

console.log(loginUsernameMessage("Disha"))
//what if somebody gives nothing
console.log(loginUsernameMessage())
//It gives undefined


//Shopping Cart condition --->We dont know how much parametres will come to us

function calculateCartPrice(val1, val2,...num1)  //Rest operator (...)
{
    return num1
}

console.log(calculateCartPrice(200,400,800)) //returns all the values in the array

//passing objects in a function

const user ={
    username: "Disha",
    schollar_number: 2311201245
}

function display(anyobject)
{
     console.log(`Name: ${anyobject.username} and Schollar Nmber: ${anyobject.schollar_number}`)
}

display(user)

//another way of sending an object
display({
    username: "Rishabh",
    schollar_number: 2311201244
})

//We can also pass array as parameter

