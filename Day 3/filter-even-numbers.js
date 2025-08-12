// function filterEven(arr){
//     return arr.filter(i => i%2 == 0);
// }

function filterEven(arr){
    let arr1 = []
    for(let i of arr){
        if(arr[i]%2 == 0){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(filterEven([1,2,3,4,5,6,7,8]));