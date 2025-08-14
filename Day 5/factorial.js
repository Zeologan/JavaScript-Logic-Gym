// 5*4*3*2*1;
// let fact = 1;
// for(let i = 5; i > 0; i--){
//     fact = fact*i;
// }
// console.log(fact)

function factorial(fact){
    if(fact == 0) return 1;
    return fact * factorial(fact -1);
}
console.log(factorial(5));
