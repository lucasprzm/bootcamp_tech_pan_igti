/*
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(items);


let a = [1, 2, 3, 4, 5];
let n = [];
console.log(a.filter((n) => n % 2 == 0));

console.log(a);

async function soma(p1, p2) {
  let v1 = await p1;

  let v2 = await p2;

  console.log(v1 + v2);
}
soma(1, 2); soma deu certo

async function soma(p1, p2) {
  var v1, v2;

  p1.then((r) => {
    v1 = r;
  });

  p2.then((r) => {
    v2 = r;
  });

  console.log(v1 + v2); soma deu errado
}
soma(1, 2);

async function soma(p1, p2) {
  let [v1, v2] = await Promise.all([p1, p2]);

  console.log(v1 + v2); deu certo
}
soma(1, 2);
*/
async function soma() {
  await p1.then((v1) => {
    p2.then((v2) => {
      console.log(v1 + v2);
    });
  });
}
soma(1, 2);
