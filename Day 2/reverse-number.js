// function reverseNumber(num){
//     let res = "";
//     str = String(num);
//     for(let i of str){
//         res = i+res;
//     }
//     num = Number(res)
//     console.log(num);
// }

const reverseNumber = (num) => {console.log(num.toString().split("").reverse().join(""));}

reverseNumber(12345);
reverseNumber(12345566);