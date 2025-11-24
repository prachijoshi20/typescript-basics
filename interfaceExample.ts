interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
const rectangle1: Rectangle = {
  height: 20,
  width: 10
};

console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}`);
console.log(`Height: ${rectangle1.height}, Width: ${rectangle1.width}`);

//interface merging
interface Animal { name: string; } interface Animal { age: number; } const dog: Animal = { name: "Fido", age: 5 };
console.log(`Name: ${dog.name}, Age: ${dog.age}`);