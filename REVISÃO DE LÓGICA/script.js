// //Estrutura de uma função

// //PRIMEIRO PASSO PARA A CRIAÇÃO DE UMA FUNÇÃO: DECLARAÇÃO DA FUNÇÃO. 

// //function + nome para a função + ()parâmetro {tarefa/retorno - O que quero que essa função faça}

// function generosMusicais(){
//     console.log("Rock")
// }
// generosMusicais() //SEGUNDO PASSO É CHAMAR/EXECUTAR/INVOCAR/ATIVAR ESSA FUNÇÃO

// //----
// function animal(){
// console.log("cobra")
// }
// animal()


// //DECLARANDO FUNÇÃO DENTRO DE VARIÁVEIS

// //ESTRUTURA

// // variável = function(){

// // }
// // variavel()

// const show = function(vaga1, vaga2,vaga3){
// console.log(vaga1, vaga2, vaga3)
// }
// show("Carol", "Vanessa", "Regina") //()argumentos: Aqui colocamos o valor no local que tá sendo reservado

// //---
// let frutas = function(fruta1, fruta2, fruta3, fruta4){
// //console.log(fruta1, fruta2,fruta3,fruta4)
// console.log(`Eu amo ${fruta1} e ${fruta2}, mas um suquinho de ${fruta3} cai super bem. Ahh e ${fruta4} é muito bom!!`)
// }
// frutas("Goiaba", "Manga", "uva", "Pêssego")


// //Aqui é um exemplo utilizando a variável let ou var, elas conseguem alterar o valor da variável. Diferente da const, const não pode ser modificada. 
// //let ou var frutas
// // frutas= "legumes"
// // console.log(frutas)



// let cor = "amarelo"
// let numero = 1998
// let nome = "Rihanna"
// // console.log(`Olá, me chamo ${nome}, tenho ${numero} anos e a minha cor preferida é ${cor}`)

// //templateString `${variável}`

// //console.log(cor) aparece amarelo pq chamei o console log antes de alterar o valor
// cor = "vermelho"
// console.log(cor , numero , nome)

// numero = 2020
// console.log(numero)


// //Ex 3
//  let soma = function(valor1, valor2, valor3){
// console.log(valor1 + valor2 + valor3)
//  }
//  soma(14, 10, 21)

//  //----USANDO VARIÁVEIS COMO VALOR DOS PARÂMETROS

// let meuAnimal = "Lua" //Variável que guardei o valor "Lua"

// function mostrarAnimal(gatinha){
// console.log(gatinha)
// }
// mostrarAnimal(meuAnimal)
// //Ativa a função(recebendo a variável meuAnimal)
 
// //---- () receba um valor de uma variável

// let carro = "uninho"//criar a variável
// function oMelhorCarro(garagem){ //criar a função e reservar o local no parâmetro 
// console.log(garagem) // mostrar o valor do parâmetro
// }
// carro = "palinho" //ex: alterando o valor da variável
// oMelhorCarro(carro) //ativei a função e chamei a variável


// FUNÇÃO COM RETORNO (RETURN)

//criei a função + nome da função + parâmetro (reservei o valor a e o valor b)
function multiplicar(a,b){
    return a * b //retorna pra mim o valor de a * o valor de b (Não sei ainda quais são esses valores)
}
//console.log(multiplicar(3,5)) //Mostra no console.log do navegador  a função que está multiplicando esses dois valores
//multiplicar() invocando a função e dando os valores para o parâmetro 

// -----------Calculando o IMC com uma função de retorno 

//peso, altura são os parâmetros
function imc(peso, altura){
    let imc = peso / (altura * altura) //peso dividido pela a altura ao quadrado (altura*altura)
    return imc
     //retorna o valor da variável
}
//console.log(imc(61, 1.74))


//VARIÁVEIS : var, let e const
//var e let posso redefinir o valor delas
//const não posso redefinir pq é uma constante (algo que não muda)

// let cor = "rosa"
// console.log(cor)

// cor = "azul"
// console.log(cor)

// cor = "verde"
// console.log(cor)

// const cpf = 1234567
// const nasc = 1999

//exemplo de função dentro de variável
const animal = function(){
    return
}

//Tentando declarar outro valor para a variável animal, deu erro pq uma constante não pode ser alterada.
// animal = "macaco"
// console.log(animal)


//----OPERADORES ---
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL
// != VALOR DIFERENTE
// !== VALOR E TIPO DIFERENTES
// == VALOR IGUAL
// === VALOR E TIPO IGUAIS


//----CONDICIONAIS IF, ELSE, ELSE-IF
//IF = SE (SE A INFORMAÇÃO FOR VERDADEIRA, FAÇA ISSO)

//ELSE IF = SENÃO SE (USADO PARA NOS DAR MAIS OPÇÕES DE ESCOLHA)

//ELSE = SENÃO (SE TODAS AS INFORMAÇÕES FOREM FALSAS, CAI NO ELSE)

// let numeroDaSorte = 1

// if(numeroDaSorte == 7){
//     console.log("Parabéns, você foi o primeiro sorteado")
// } else  if (numeroDaSorte == 2){
// console.log("Parabéns, você foi o segundo sorteado")
// } else if(numeroDaSorte == 1){
// console.log("Parabéns, você foi o terceiro sorteado")
// }
// else{
//     console.log("Você não tem sorte")
// }


// OPERADORES LÓGICOS 
// ! (NOT) ELE INVERTE UM VALOR QUE É DADO A ELE

// let segunda = true
// console.log(!segunda)

// let terca = false
// console.log(!terca)


// || (OU) COMPARA SE UM OU O OUTRO É VERDADEIRO  - Pipe line o nome dessa barra kk

// let aniversario = "Abril"

// if(aniversario == "Dezembro" || aniversario == "Janeiro" || aniversario == "Junho" || aniversario == "Agosto"){
// console.log(`Você faz aniversário no mês de ${aniversario} `)
// } else {
//     console.log("Você não pode embarcar no cruzeiro")
// }


// && (E) COMPARA SE AS DUAS OU MAIS INFORMAÇÕES SÃO VERDADEIRAS = UMA 'E' A OUTRA

// let nome = "Carol"
// let sobrenome = "Oliveira"

// if(nome == "Karynne" && sobrenome == "Oliveira"){
// console.log("Ta tudo certo!")
// }else{
// console.log("Respostas incorretas")
// }


// let comida = "macarrão"

// if(comida === "Macarrão"){
//     console.log("Uhulll, amo!")
// }else{
//     console.log("Poxaa")
// }

//Deu poxa pq "macarrão" não é igual a "Macarrão"

//Loops - Laços de repetição 

//variável, condição, execução
// for(let numero = 1; numero <= 10; numero++){
// console.log(numero)
// }

// numero = 1 o valor inicial 
//enquanto o número for menor ou igual a 10, acrescente 1 valor (++)

// numero = numero + 1
// 2 + 1 = 3
// 3 + 1 = 4
// ... 
// 9 + 1 = 10


// ++ incremente 1 valor 
// numero = numero + 1 

// -- decremento -1 valor
// numero = numero - 1

//Forma simplificada
// for(let n = 0; n <=10; n++){
//     console.log(n)
//     }

//Forma completa 
for(let n = 1; n <=10; n=n+2){
    console.log(n)
    }

    //A variável n vai receber ela mesma mais + 1 valor

//-------- CONTAGEM REGRESSIVA
    for (let num = 10; num >= 1; num--){
console.log(num)
    }