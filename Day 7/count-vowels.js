function countVowels(str){
    let count = 0, vowels = ['a','e','i','o','u'];
    for(let i of str){
        if(vowels.includes(i.toLowerCase())){
            count++
        }
    }
    console.log(count)
}

countVowels("Frontend Developer");
countVowels("Angular Developer");
countVowels("MERN Stack");