function reverseString(arr){
    let rev = ''
    for(let i of arr){
        rev = i + rev 
    }
    console.log(rev)
}
reverseString('abcdef');