let primos = [2,3,5,7,11,13]

let curso = {
  nome: "Bootcamp Front End",
  modulos: 4,
  presencial: false,
  turma: 1
}

let primos2 = [...primos, 17]
let primos3 = [1,...primos2]

console.log(primos2)
console.log(primos3)

let curso2 = {
  ...curso,
  descricao: "bla, bla, bla",
  ativo: true
}

let curso3 = {
  ...curso
}

console.log (curso2)
console.log (curso3)