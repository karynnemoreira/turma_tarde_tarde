//sintaxe
//function nomedafunção (parâmetro) {//tarefa ou retorno}

function mensagem() {
   // console.log("Hoje está muito calor!")
}
mensagem() //ativando a função mensagem (invocando)


// teste 
// function msg(){
//     console.log("Que neste ano consigamos muita grana")
// }
// msg()


// DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS

//sintaxe
//variavel = function(){
//}


//Exemplo do anônimo
let msg = function () {
//console.log("a vaga de dev vem em 2024"
//)
}
msg()


//Exemplo cadastro 
//                          1º,   2º ,   3º
const cadastro = function (nome, idade, cidade){
// console.log(nome)
// console.log(idade)
// console.log(cidade)
//console.log(nome,',',idade, ',', cidade) gambiarra da Bia
//console.log(`Olá me chamo ${nome}, tenho ${idade} anos e moro na cidade de ${cidade}`)
}

//cadastro("Bia Sarah", 18, "Pernambuco")


//Exemplo 3  Função com parâmetro 

function info (email){
    //console.log(email)
}
info("rihanna@umbrella.com")

//string (texto), pode ser envolvido por aspas simples '', aspas duplas "" ou crase ` `

//templateString é uma string (texto) mais poderosa, ela guarda diversos caractes ou valores. 

//number (numérico) não é envolvido por aspas ou crase

//boolean (true ou false) não é envolvido por aspas ou crase

//Exemplo 4  Função com parâmetro 

function mostrarAnimais(animal1, animal2, animal3){
console.log(`Olá eu sou o anima1: ${animal1}, Olá eu sou o animal2: ${animal2}, Olá eu sou o animal3: ${animal3}`)
}
mostrarAnimais("galinha", "pavão", "pombo")


//------FUNÇÃO COM RETURN

//EXEMPLO 1

function dobro(numero){
    return numero * 2
}
console.log(dobro(19))

//  EXEMPLO 2

function triplo(number){
return number * 3
}
console.log(triplo(62))