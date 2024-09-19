const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

const array3 = [...array1, array2];

const [un, , trois, ...rest] = array1;
console.log(un);
console.log(trois);
console.log(rest);

if (2 === "2") {
  console.log("true");
}

type ArrayDemo = [number, () => void];

const arrayDemo = [10, () => console.log("Hello")];

arrayDemo[0] = "20";
