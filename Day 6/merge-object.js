const person1 = {
    name : "rohit",
    age : 32
}

const person2 = {
    name : "Sejal",
    age : 21,
    gender : "Female"
}

const merge = {...person1,...person2}
console.log(merge)