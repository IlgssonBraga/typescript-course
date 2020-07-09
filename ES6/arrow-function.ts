// Exemplo sem arrow function

function exibeNome(nome: string): string {
  return nome;
}

console.log(exibeNome("Ilgsson"));

// Exemplo com arrow function

const mult = (num1: number, num2: number) => num1 * num2;

console.log(mult(3, 4));
