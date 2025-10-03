// Array Object sort 

let student = [
    { name : 'Rahul', score : 95},
    { name : 'Ram', score : 80},
    { name : 'Sahil', score : 67},
    { name : 'Akash', score : 95},
    { name : 'Umesh', score : 99}
]


student.sort((a,b)=>{
    if(a.score !== b.score){
        // console.log(student)
        return a.score - b.score;
    }
    return a.name.localeCompare(b.name)
})

console.log(student)