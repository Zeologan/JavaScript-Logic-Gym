// function greatestCommon(a,b){
//     let common = 1;
//     let greater = a>b ? a : b; 
//     for(let i = 1; i <= greater ; i++){
//         if(a%i == 0 && b%i==0){
//             common = i;
//         }
//     }
//     console.log(common);
// }
// greatestCommon(20,20);

// better approach 
function greatestCommon(a,b){
    while(b!==0){
        temp = b;
        b = a%b;
        a = temp
        console.log(a, b)
    }
    // console.log(a)
}
greatestCommon(20,28)