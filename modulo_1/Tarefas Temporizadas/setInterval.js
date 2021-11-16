const relogio = document.getElementById("relogio");
const btn = document.getElementById("btn");
let interval;

function inicia() {
  relogio.textContent = formataHora(new Date());
  setInterval(() => {
    relogio.textContent = formataHora(new Date());
    //console.log("atualizou");
  }, 1000);
  btn.textContent = "Para relogio";
}

inicia();

function parar() {
  clearInterval(interval);
  btn.textContent = "Inicia relogio";
}

function iniciarOuParar() {
  if (interval) {
    parar();
  } else {
    inicia();
  }
  clearInterval(interval);
  btn.textContent = "Inicia relogio";
}

function formataHora(date) {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds().toString().padStart(2, "0");

  return `${h}:${m}:${s}`;
}
