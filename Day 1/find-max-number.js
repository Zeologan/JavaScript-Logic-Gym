function findMaxNumber(arr){
    let max = 0;
    for(let i of arr){
        if(typeof(i) === "number" & i > max){
            max = i;
        }
    }
    console.log(max)
}
findMaxNumber([1,2,3,4,5,6]);
findMaxNumber([null,"2",3,4,5,6]);
findMaxNumber([1,"2",3,4,5,6]);