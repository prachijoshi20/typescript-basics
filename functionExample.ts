function multiply(a: number, b: number) {
  return a * b;
}

const result = multiply(5, 10);
console.log(`Result: ${result}`);


function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
const sum1 = add(5, 10);
console.log(`Sum1: ${sum1}`);