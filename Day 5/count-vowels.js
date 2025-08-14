function countVomels(word){
    vowel = ["a", "e", "i", "o", "u"];
    count = 0;
    for(let i of word) if(vowel.includes(i)) count++;
    return count;
}
console.log(countVomels('abcdefghijklmnopu'));