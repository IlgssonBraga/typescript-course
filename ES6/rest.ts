const soma = (...args: number[]) => {
  return args.reduce(((sum, arg) => sum += arg), 0);
};

console.log(soma(1, 2, 3, 4, 5, 27, 37));
