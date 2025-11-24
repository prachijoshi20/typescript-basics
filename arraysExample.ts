let names: String [] = ["Alice", "Bob", "Charlie"];
console.log(names);
console.log("First Name:", names[0]);
console.log("Total Names:", names.length);
names.push("Diana");
console.log("After Adding Diana:", names);
names.pop();
console.log("After Removing Last Name:", names);

//any type array
let mixedArray: any[] = [1, "Two", true, 4.5]; 
console.log("Mixed Array:", mixedArray);
console.log(mixedArray[0].toUpperCase());
mixedArray.push({key: "value"});
console.log("After Adding Object:", mixedArray);
mixedArray.splice(1, 1);
console.log("After Removing Second Element:", mixedArray);

for (let i in mixedArray) {
    console.log(`Index ${i}:`, mixedArray[i]);
}

