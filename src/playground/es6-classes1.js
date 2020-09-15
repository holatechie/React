class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return console.log(`Hey There ${this.name} !`);
  }

  getDescription() {
    return console.log(`${this.name} is ${this.age} years old`);
  }
}

class Student extends Person {
  constructor(name, age, majors) {
    super(name, age);
    this.majors = majors;
  }
  hasMajor() {
    return console.log(`${this.name} has major ${!!this.majors}`);
  }
}

const me = new Student();
console.log(me);
console.log(me.getDescription());

const other = new Student("Krish", 5, "CS");
console.log(other.hasMajor());
console.log(other.getGreeting());
console.log(other.getDescription());
