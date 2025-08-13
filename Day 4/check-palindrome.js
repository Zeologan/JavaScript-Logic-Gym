function checkPalidrome(arr){
    // for(let i = 0; i < arr.length/2; i++){
    //     if(arr[i]!==arr[arr.length-1-i] )return false;
    // }
    // return true;
    arr = String(arr)
    for(let i in arr)if(arr[i]!== arr[arr.length-1-i]) return false;
    return true;
}
// console.log(checkPalidrome('rohior'));
console.log(checkPalidrome(123456));
