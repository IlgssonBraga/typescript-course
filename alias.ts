type Person = {
  name: string;
  age: number;
  sayName: () => void;
};

const person1: Person = {
  name: "Ilgsson",
  age: 25,
  sayName: function () {
    console.log(`Hi, my name is ${this.name}.`);
  },
};

person1.sayName();
