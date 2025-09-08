class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
        console.log(this.isAdult());
    }

    isAdult() {
        return this.age >= 18;
    }
}

const std1 = new Student('rohit', 23);
const std2 = new Student('karan', 20);

std1.introduce();
std2.introduce();
