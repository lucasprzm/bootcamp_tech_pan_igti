function retangulo (altura,largura) {
  this.altura = altura
  this.largura = largura
  this.area = function () {
    return this.altura * this.largura
  }
}

let r1 = new retangulo (4,7)

console.log(r1)
console.log(r1.area())

function calculaArea () {
  return this.altura * this.largura
}

console.log(calculaArea())