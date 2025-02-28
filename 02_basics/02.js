const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]


//console.log(marvel_heroes.push(dc_heroes))
//console.log(marvel_heroes[3][1]) //This prints Flash

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

//other method to conact two arrays ---> spread (more preferred)
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes) //spreads all the elements of an array into individual elements

// when array is isnide another array and it goes on

const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const usable_another_array = another_array.flat(Infinity) //In the brackets mention the deapth you want to go to...hack is you can mention to infinity
console.log(usable_another_array)



// When we take data from websites, it comes in many forms
// But we need to convert that data into array

console.log(Array.isArray("Disha"))
console.log(Array.from("Disha"))

console.log(Array.from({name:"Disha"})) ///Unable to convert directly to array --> gives an empty array (Intresting case)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,score3))