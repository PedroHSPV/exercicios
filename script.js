// faça um programa que exiba 3 numeros na tela
// Declaração das variáveis
var n1 = 1
var n2 = 2
var n3 = 3

// Exibindo os números no console
console.log(n1, n2, n3); 

// Faça um programa que leia 3 números e exiba-os na tela.

var n1 = ''
var n2 = ''
var n3 = ''

n1 = Number (prompt()) //abre a janela
n2 = Number (prompt())
n3 = Number (prompt())

//Faça um programa que leia 3 números, some-os e exiba a média entre eles.

// Coletando três números do usuário
var n1 = parseFloat(prompt("Digite o primeiro número:"));
var n2 = parseFloat(prompt("Digite o segundo número:"));
var n3 = parseFloat(prompt("Digite o terceiro número:"));

// Somando os números
var soma = n1 + n2 + n3;

// Calculando a média2
var media = soma / 3;

// Exibindo a média
console.log("A média é: " + media.toFixed(1));


//Faça um programa que leia do usuário uma temperatura em Fahrenheit,   
 // converta-a para graus Celsius e escreva o novo valor na tela. 
  // fórmula de conversão de Fahrenheit (F) 
 // para Celsius é C = ( ( F - 32 ) * 5 ) / 9. 
  //  Exemplo: 100 Fahrenheit = 37,77 Celsius.

  var f1 = parseFloat(prompt("Digite o valor em Fahrenheit"));

  // Conversão correta de Fahrenheit para Celsius
  var temperaturaEmCelsius = ((f1 - 32) * 5) / 9; 
  
  // Exibindo a temperatura em Celsius
  alert("A temperatura em Celsius é: " + temperaturaEmCelsius.toFixed(1) + "°C");
  

 // Faça um programa que leia 2 números, some-os e exiba uma mensagem
 //  com o resultado apenas se o resultado for maior que 100.

 var n1 = parseFloat(prompt("digite o numero até 100"))
 var n2 = parseFloat(prompt("digite o numero até 100"))

 var soma = n1 + n2

 if( soma < 100){
    alert("O número é menor que 100")
 }else {
    alert("O número é maior que 100")
}

/* Para um jogo, precisamos saber se um personagem morreu ou não 
depois de sofrer um ataque. Faça uma função 
que receba 2 parâmetros, 'dano' e 'saude'. 
A função deve retornar '1' se o dano for matar 
o personagem (ou seja, deixar sua saúde menor ou igual a zero) 
e '0' caso contrário.*/

function personagemMorreu(dano, saude) {
    var novaSaude = saude - dano;

    // Verifica se a nova saúde é menor ou igual a zero
    if (novaSaude <= 0) {
        return 1; // O personagem morreu
    } else {
        return 0; // O personagem ainda está vivo
    }
}

var resultado = personagemMorreu(10, 5);
if (resultado === 1) {
    alert("Você morreu!");
} else {
    alert("Você ainda está vivo!");
}

/*Precisamos limitar as posições em que um
 inimigo pode andar na tela. A menor posição 
 possível é 0 e a maior, 100: qualquer valor
  maior que 100 ou menor que 0 sairia fora da 
  tela. Precisamos de uma função LimitaPosicao 
  que recebe uma POSICAO que pode ter qualquer 
  valor positivo ou negativo, verifica se ela 
  é válida ou não e retorna sempre um valor
   corrigido entre 0 e 100.*/

   function limitaPosicao(posicao) {
    if (posicao < 0) {
        return 0; // Se a posição for menor que 0, retorne 0
    } else if (posicao > 100) {
        return 100; // Se a posição for maior que 100, retorne 100
    } else {
        return posicao; // Caso contrário, retorne a posição original
    }
}
console.log(limitaPosicao(-10)); // Saída: 0
console.log(limitaPosicao(50));  // Saída: 50
console.log(limitaPosicao(110)); // Saída: 100

/*Faça um programa que leia um número e verifique se ele é par ou ímpar. 
xiba uma mensagem indicando o resultado*/

function verificaParOuImpar() {
    var n1 = parseFloat(prompt("Digite um número:"));

    if (n1 % 2 === 0) {
        alert('O número é par.');
    } else {
        alert('O número é ímpar.');
    }
}

// Chame a função
verificaParOuImpar();