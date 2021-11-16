let caixa = document.getElementById("caixa")
let cx,cy

function setPos (x,y) {
  caixa.style.top = y + "px"
  caixa.style.left = x + "px"
}

caixa.addEventListener("mousedown", iniciaArraste)
document.addEventListener("mouseup", terminaArraste)

function iniciaArraste (evt) {
  cx = evt.clientX - pxParaNum (caixa.style.left)
  cy = evt.clientY - pxParaNum (caixa.style.top)
  caixa.classList.add ("arrastando")
  document.addEventListener("mousemove", arrasta)
}

function terminaArraste (evt) {
  caixa.classList.remove("arrastando")
  document.removeEventListener("mousemove", arrasta)
}

function arrasta (evt) {
  let x = evt.clientX
  let y = evt.clientY
  setPos(x - cx,y - cy)
}

function pxParaNum (s) {
  return +(s.replace("px",""))
}