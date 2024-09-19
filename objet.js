/*const person1 = {
  name: "John",
  lastName: "Doe",
};

const person2 = {
  name: "Jane",
  age: 25,
};

const person3 = {
  ...person1,
  ...person2,
  test: "toto",
};

console.log(person3);

const { age: age1, lastName, ...lesautresproprietes } = person3;

console.log(age1);
console.log(lastName);
console.log(lesautresproprietes);
*/
var person4 = {
    name: {
        firstName: "John",
        lastName: "Doe",
    },
    lastName: "Doe",
};
person4.name.firstName = "Jane";
