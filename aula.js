var valorIns = parseInt(prompt("Insira o valor R$"));
var cedulas = [200,100,50,20,10,5,1];

console.log("Valor inserido: " + valorIns);

    for (var nota of cedulas)
    {
    var quantidadeNotas = parseInt(valorIns/nota);
    console.log(quantidadeNotas + " nota(s) de R$ " + nota + ",00");
    valorIns = valorIns % nota;
    }

