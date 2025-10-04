// this is one of the most important ES6 concepts

// Set 
// let number = new Set([1,2,3,4,5,1,2,3,4]);
// number.add(9)
// number.delete(2)
// console.log(number);
// number.clear()
// console.log(number);


// Map 
// const user = new Map();
// user.set("name", "Rohit")
// user.set("age", 23)
// user.set("skills", [1,2,3,4])
// for(let [key] of user){
//     console.log(key)
// }


// You are given an array with duplicate items.
// Remove duplicates using Set.
// Create a Map that stores each number as a key and its square as a value.

arr = [5,1,2,3,3,4,5,5]
const number = new Set(arr);
const sqrt = new Map()
for(let i of number){
    sqrt.set(i,i**2);
}
console.log(sqrt)
