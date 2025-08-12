function findDuplicate(arr){
    let d = [];
    for(let i of arr){
        if(!d.includes(i)){
            d.push(i);
        }
    }
    console.log(d);
}

findDuplicate([1,2,4,1,2,3,'1','2','3','1','hellow'])