const tuple1 = [1, "Name"]; // implicit type

// tuple1.push(true); // Argument of type 'true' is not assignable to
// parameter of type 'string | number'
console.log(tuple1);

const tuple2: [boolean, string] = [true, "aa"];

tuple2.push(false);
tuple2.push("Hello");

console.log(tuple2);
