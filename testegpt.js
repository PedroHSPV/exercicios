/*Crie uma variável nome e atribua seu nome. Depois, crie uma variável idade e atribua sua idade. 
Exiba esses valores no console.

const nome = prompt('Digite seu nome')
const idade = prompt('Digite sua idade')

document.getElementById('resultado').value = `Meu nome é ${nome}, e tenho ${idade} de idade!`
*/


/*Crie duas variáveis num1 e num2. Atribua a elas dois números inteiros. Calcule a soma, a subtração,
a multiplicação e a divisão e exiba os resultados no console.
let num1 = 8;
let num2 = 5;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

document.getElementById('resultado').value = `Soma: ${soma},
 Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, 
 Divisão: ${divisao}`;*/


 /*Crie uma variável nota e atribua a ela um valor entre 0 e 10. 
Use uma estrutura if para verificar se a nota é maior ou igual a 7.
 Se for, exiba "Aprovado", caso contrário, exiba "Reprovado".*/

 const nota = parseFloat(prompt('Digite sua nota!'))

 function notaAprovado(){
    if(nota >= 7 ){
        alert('Aprovado!')
        document.getElementById('resultado').value = 'Aprovado'
    } else {
        alert('Reprovado!')
        document.getElementById('resultado').value = 'Reprovado'
    }
 }

notaAprovado()

/*Crie uma função chamada calcularArea que receba a largura e a 
altura de um retângulo como parâmetros e retorne a área.
 Chame a função com diferentes valores e exiba o resultado no console.

function calcularArea(largura, altura){
    return largura * altura
}
let largura = parseFloat(prompt('Digite a largura'))
let altura = parseFloat(prompt('Digite a altura'))


const area = calcularArea(largura, altura)

console.log('A área do retângulo é:' + area)*/


/*Crie um objeto chamado pessoa que tenha as propriedades nome,
 idade e cidade. Exiba essas propriedades no console.

 const pessoa = [
    {nome: 'Pedro', idade:'27', cidade: 'São Paulo'}
 ]

 console.log(pessoa)*/

 /*
 Crie uma string JSON que represente um livro com propriedades 
 como titulo, autor e ano. Use JSON.parse() para converter a 
 string em um objeto e exiba o título do livro no console.

// String JSON representando um jogador
const QB = '{"nome": "Josh Allen", "idade": 28, "posição": "Quarterback", "número": 17}';

// Convertendo a string JSON em um objeto
const jogadorNfl = JSON.parse(QB);

// Exibindo o nome do jogador no console
console.log(jogadorNfl.número);*/

 /*
Crie um array que represente uma lista de tarefas. Adicione uma nova tarefa, 
remova uma tarefa existente e exiba a lista atualizada no console.*/


let tarefas = ["Comprar leite", "Estudar Javascript", "Fazer exercicios"]

tarefas.push("Ganhar jogo do bills")

tarefas.splice(0,3)

console.log(tarefas)