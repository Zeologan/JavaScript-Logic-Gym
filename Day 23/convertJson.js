const user = {
    name : "Rohit",
    age : 23,
    skills : ['html', 'css', 'js'],
    isDevelopment : true
}

console.log(typeof(user));

// Object to Json 
const jsonString = JSON.stringify(user);
console.log(typeof(jsonString));
console.log(jsonString);

// Json to Object  
const objectJson = JSON.parse(jsonString);
console.log(objectJson)
