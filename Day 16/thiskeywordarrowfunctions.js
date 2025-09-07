// // console.log(this);
// // const sayHi = () => {
// //     console.log(this)
// // }
// // sayHi()

const person = {
    name : 'rohit',
    fn : function () {
        console.log(this.name)
    }
}

const person1 = {
    name : 'rohit',
    fn : () => {
        console.log(this.name)
    }
}

person.fn();
person1.fn();

