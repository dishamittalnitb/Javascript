//scopes

if(true){
let a=10
const b=20
var c =30
}

//console.log(a)
//console.log(b)
console.log(c)

//var is different. It does not have block scope
// And the scoping in browser is different from scoping in coding environment.

function one()
{
    const username = "Disha"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()


////////////////////////////////////////////////////////////////////

console.log(addone(7))
function addone(num)
{
    return num +1
}

console.log(addtwo(9))
const addtwo=function(num)
{
    return num +2
}

//Hoisting ---->Not able to use function without declaration but 
//in the above declaration we can do it.



