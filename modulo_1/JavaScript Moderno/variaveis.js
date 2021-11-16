let a = 1
const b = 1

a = 2
// b = 2 dá erro, constante não pode ser alterada

function teste () {
  for (var i = 0; i < 5; i++) {}
  for (let j = 0; j < 5; j++) {
    console.log (`j: ${j}`)
  }
  console.log (`i: ${i}`)
  // console.log (`j: ${j}`) erro, pois como j foi declarado com let, ele não existe fora do for.
}

teste ()