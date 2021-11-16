let somaV2 = (a,b) => a + b

console.log(somaV2(1,2))

function retangulo (altura,largura) {
  this.altura = altura
  this.largura = largura
  this.area = () => this.altura * this.largura
  }

let r1 = new retangulo (5,6)

console.log(r1.area())

let imprimeMensagem = m => console.log ("m")

imprimeMensagem()