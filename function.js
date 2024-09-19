const person = {
  firstName: "John",
  lastName: "Doe",
  getFirstName: () => {
    return this.firstName;
  },
};

person.getFirstName();

function addition(a, b) {
  return a + b;
}

const addition1 = (a, b) => a + b;

addition1(1, 2); // 3
