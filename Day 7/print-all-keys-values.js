function printKeysValues(person){
    let key = [], values = [];
    Object.keys(person).forEach(i => {
        key.push[i]
        values.push(person[i])
    })
    return key,values;
}
console.log(printKeysValues({ name: "Rohit", age: 23, city: "Mumbai" }));