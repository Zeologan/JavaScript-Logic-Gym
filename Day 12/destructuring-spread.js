const userObj = {
    name : 'rohit',
    age : '23',
    phone : '123456789',
    hobbies : ['Gaming', 'Travel', 'Foodie', 'Coding']
}

// object destructure with spread;
// array destructure with spread;
const {name, age, ...other} = userObj;
const [hobb1, hobb2, ...others]= userObj.hobbies
console.log(name, other);
console.log(hobb1, others)