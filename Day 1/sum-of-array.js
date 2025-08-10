function sumOfArray(arr){
    let sum = 0;
    for(let i of arr){
        if(typeof(i) === "number"){
            sum+=i;
        }
    }
    console.log(`Sum of Array : ${sum}`)
}

sumOfArray([1,2,3,4,5,6]);
sumOfArray([null,"2",3,4,5,6]);
sumOfArray([1,"2",3,4,5,6]);