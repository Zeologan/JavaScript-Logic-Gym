function maxNumber(arr){
    return arr.reduce((max,current)=> max > current ? max :current);
}

console.log(maxNumber([0,6,1,2,3,4,4,1]))
console.log(maxNumber([6,1,2,3,4,4]))