
let btnCalcular = document.getElementById("simular")

btnCalcular.addEventListener("click", function () {
  // Selecionando os elementos HTML e pegando os valores selecionados ou digitados dos elementos (valueAsNumber)
  let financiamento = document.getElementById("valor").valueAsNumber
  let prazo = document.getElementById("prazo").valueAsNumber
  let jurosAoAno = document.getElementById("jurosAoAno").valueAsNumber
  let tbody = document.querySelector("tbody")
  
  
  // Variáveis de suporte
  let jm = (1 + jurosAoAno)**(1/12) - 1
  let prazoMeses = prazo*12
  let amortizacao = financiamento / prazoMeses
  let totalJurosAcumulados = 0
    
  // Cálculo de juros acumulado
  for (let i = 0; i < prazoMeses; i++) {
    let saldoDevedor = financiamento - (i * amortizacao)
    let jurosCompostos = saldoDevedor * jm
    totalJurosAcumulados += jurosCompostos
  }

  // Montagem do array das 5 prestações
  for(let i = 0; i < 5; i++) {
    let jMensais = jm*(financiamento - (i * amortizacao))
        
    let tr = tbody.children[i]
    tr.children[1].textContent = amortizacao.toFixed(2)
    tr.children[2].textContent = jMensais.toFixed(2)
    tr.children[3].textContent = (amortizacao + jMensais).toFixed(2)

  }
  document.getElementById("prestacoes").valueAsNumber = prazoMeses
  document.getElementById("jurosam").valueAsNumber = jm
  document.getElementById("jurostotal").valueAsNumber = totalJurosAcumulados.toFixed(2)
})
