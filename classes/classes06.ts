class Pessoa {
  constructor(public _name: string, public _age: number) {
  }

  set name(n: string) {
    if (n === this._name) {
      this._name = n;
    }
  }

  get name() {
    return this._name;
  }

  set age(age: number) {
    if (age >= 0 && age <= 120) {
      this._age = age;
    }
  }

  get age() {
    return this._age;
  }
}

const pessoa1 = new Pessoa("Ilgsson", 25);

pessoa1.name = "eggw";
pessoa1.age = -3;

console.log(pessoa1.age);
console.log(pessoa1.name);
