var Employee = { //Object
  name : "Karunakar",
  age: 30,
  salary : 10000,
  Address:{ //Nested Object
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

console.log("Name: " + Employee.name); //Printing Object members
console.log("Age: " + Employee.age);
console.log("Salary: " + Employee.salary);
console.log("City: " + Employee.Address.city);
console.log("State: " + Employee.Address.state); //Printing Nested object members
console.log("PinCode: " + Employee.Address.pincode);
