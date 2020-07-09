var number = 7;

{
  var number = 13;
}

console.log(number);

let number2 = 15;

{
  let number2 = 2;
}

console.log(number2);

const value = 7;

// value = 16; // Error: Cannot assign to 'value' because it is a constant

// Var possui apenas escopo de função
// Let possui escopo de bloco
// Const can't be reassigned
