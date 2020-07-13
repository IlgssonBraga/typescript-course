// inheritance

class Person {
  constructor(public name: string, public age: number, public prof: string) {}

  public sayName(): string {
    return `Hello, my name is ${this.name}.`;
  }
}

const person1 = new Person("Ilgsson", 25, "Web developer");

console.log(person1.sayName());

class Teacher extends Person {
  constructor(
    public name: string,
    public age: number,
    public prof = "Teacher",
  ) {
    super(name, age, prof);
  }
}

const prof1 = new Teacher("Arlaine", 24);

console.log(prof1.sayName());
