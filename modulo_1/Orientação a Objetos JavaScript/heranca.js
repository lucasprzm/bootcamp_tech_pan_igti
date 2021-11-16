function retangulo (altura,largura) {
  this.altura = altura
  this.largura = largura
  this.area = function () {
    return this.altura * this.largura
  }
}

let r1 = new retangulo (4,7)
let r2 = new retangulo (7,2)

console.log(r1.area === r2.area)

function retanguloV2 (altura,largura) {
  this.altura = altura
  this.largura = largura
}
retanguloV2.prototype.area = function () {
  return this.altura * this.largura
}

let r3 = new retanguloV2 (3,4)
let r4 = new retanguloV2 (7,2)

console.log (r3.area === r4.area)