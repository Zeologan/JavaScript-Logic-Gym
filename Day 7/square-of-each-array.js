// function sqrtArray(arr){
//     newArray = []
//     for(let i of arr){
//         newArray.push(i*i);
//     }
//     console.log(newArray)
// }
// sqrtArray([1,2,3,4,5])

let arr = [1,2,3,4,5,6];
let newArray = arr.map(i => i*i);
console.log(newArray);