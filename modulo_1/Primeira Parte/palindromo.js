function palindromo (palavra) {
  if (palavra.split("").reverse().join("") == palavra) {
    console.log(`A palavra ${palavra} é um palíndromo.`)
  } else {
    console.log(`A palavra ${palavra} não é um palíndromo.`)
  }
}
palindromo("o")