//Estrutura de uma função

//PRIMEIRO PASSO PARA A CRIAÇÃO DE UMA FUNÇÃO: DECLARAÇÃO DA FUNÇÃO. 

//function + nome para a função + ()parâmetro {tarefa/retorno - O que quero que essa função faça}

function generosMusicais(){
    console.log("Rock")
}
generosMusicais() //SEGUNDO PASSO É CHAMAR/EXECUTAR/INVOCAR/ATIVAR ESSA FUNÇÃO

//----
function animal(){
console.log("cobra")
}
animal()


//DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS

//ESTRUTURA

// variável = function(){

// }
// variavel()

const show = function(vaga1, vaga2,vaga3){
console.log(vaga1, vaga2, vaga3)
}
show("Carol", "Vanessa", "Regina") //()argumentos: Aqui colocamos o valor no local que tá sendo reservado

//---
let frutas = function(fruta1, fruta2, fruta3, fruta4){
//console.log(fruta1, fruta2,fruta3,fruta4)
console.log(`Eu amo ${fruta1} e ${fruta2}, mas um suquinho de ${fruta3} cai super bem. Ahh e ${fruta4} é muito bom!!`)
}
frutas("Goiaba", "Manga", "uva", "Pêssego")


//Aqui é um exemplo utilizando a variável let ou var, elas conseguem alterar o valor da variável. Diferente da const, const não pode ser modificada. 
//let ou var frutas
// frutas= "legumes"
// console.log(frutas)



let cor = "amarelo"
let numero = 1998
let nome = "Rihanna"
// console.log(`Olá, me chamo ${nome}, tenho ${numero} anos e a minha cor preferida é ${cor}`)

//templateString `${variável}`

//console.log(cor) aparece amarelo pq chamei o console log antes de alterar o valor
cor = "vermelho"
console.log(cor , numero , nome)

numero = 2020
console.log(numero)


//Ex 3
 let soma = function(valor1, valor2, valor3){
console.log(valor1 + valor2 + valor3)
 }
 soma(14, 10, 21)

 //----USANDO VARIÁVEIS COMO VALOR DOS PARÂMETROS

let meuAnimal = "Lua" //Variável que guardei o valor "Lua"

function mostrarAnimal(gatinha){
console.log(gatinha)
}
mostrarAnimal(meuAnimal)
//Ativa a função(recebendo a variável meuAnimal)
 
//---- () receba um valor de uma variável

let carro = "uninho"//criar a variável
function oMelhorCarro(garagem){ //criar a função e reservar o local no parâmetro 
console.log(garagem) // mostrar o valor do parâmetro
}
carro = "palinho" //ex: alterando o valor da variável
oMelhorCarro(carro) //ativei a função e chamei a variável


