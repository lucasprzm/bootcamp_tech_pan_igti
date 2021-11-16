class Retangulo {
  constructor (altura, largura) {
    this.altura = altura
    this.largura = largura
  }
  area () {
    return this.altura * this.largura
  }
}

let r1 = new Retangulo (3,4)
let r2 = new Retangulo (3,8)

console.log (r1.altura)
console.log (r1.area())
console.log (r1.area === r2.area)

class Quadrado extends Retangulo {
  constructor (dimensao) {
    super (dimensao, dimensao)
  }
}

let r3 = new Quadrado (3)

console.log (r3.altura)
console.log (r3.area())