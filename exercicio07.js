const prompt = require("prompt-sync")();
let primeiro_valor = parseInt(prompt("Digite o primeiro valor: "));
let ultimo_valor = parseInt(prompt("Digite o último valor: "));
let incremento = parseInt(prompt("Digite o incremento: "));
let contagem = "";

if (primeiro_valor < ultimo_valor) {
  for (let i = primeiro_valor; i <= ultimo_valor; i += incremento) {
    console.log(i + " ");
  }
} else {
  for (let i = primeiro_valor; i >= ultimo_valor; i = i - incremento) {
    contagem += i + " ";
  }
}

console.log("Contagem: ", contagem);
console.log("FIM");
