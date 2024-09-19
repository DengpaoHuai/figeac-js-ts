let test = "chaine";
let complet = `ma ${test} est une ${test}`;

if (true) {
  test = 26;
  console.log(test);
}

console.log(test);

const monNombre: number = 1;

const add = (tonnumber: 1 | 2 | 3 | 4) => {
  return 2 + tonnumber;
};

add(monNombre);

type Right = "admin" | "user" | "guest";
const right = "admin";
