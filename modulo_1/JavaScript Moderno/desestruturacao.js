let primos = [2,3,5,7,11,13]

let curso = {
  nome: "Bootcamp Front End",
  modulos: 4,
  presencial: false,
  turma: 1
}

let [p1, p2, ...resto] = primos
console.log (p1)
console.log (p2)
console.log (resto)

let {nome, turma, ...outrosCampos} = curso

console.log (nome)
console.log (turma)
console.log (outrosCampos)

function imprime ({nome}) {
  console.log (nome)
}