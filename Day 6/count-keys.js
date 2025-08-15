const obj1 = {
    name : "rohit",
    age : 23,
    color : "brown"
}


// Best Approach 
let numOfKeys = Object.keys(obj1).length;
console.log(numOfKeys)


// By Iterating Object 
// let count = 0;

// #1
// for(let i in obj1){
//     if(obj1.hasOwnProperty(i)){
//         count++;
//     }
// }

// #2
// Object.keys(obj1).forEach(i=>{
//     count++
// });
// console.log(count);