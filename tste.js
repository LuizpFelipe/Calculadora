let valor = -5;
let valor2 = -5;
let valores = []

valores.push(valor, valor2);
let total = valores[0]; // Inicia o total com o primeiro valor do array

for (let i = 1; i < valores.length; i++) {
    total += valores[i]; // Subtrai cada número subsequente do total
}
console.log(total); // Deve retornar -10