var car = {
    type: "Toyota",
};
car.type = "Ford"; // no error
//car.type = 2; //error as type is string,type interface
//car.milage = 25; // error as milage property not defined in type interface
//Example with optional property
var shape = {
    Sides: 4
};
//shape.Color = "Red"; // no error
shape.Sides = 5; // no error
console.log("Shape:", shape);
shape.Sides = 6;
shape.Color = "Blue";
console.log("Updated Shape:", shape);
//Example with index signature
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Alice = 30; // no error
console.log("Name-Age Map:", nameAgeMap);
