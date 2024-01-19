function semana(){
    console.log("Segunda")
}
semana()

//------
//variável nomedavariável = valordavariavel
let nomeDaVariavel = "Bia"

function mostrarNome(camarote){
console.log(`${camarote} foi convidada para o camarote da Ivete `)
}
mostrarNome(nomeDaVariavel)

//---- Condição If, Else, Else if 

//if e else, são duas opções somente, verdade ou mentira 

let animal = "canguru"

if(animal == "gato"){
console.log("Você adivinhou meu animal favorito")
} else{
    console.log("Você chutou errado")
}

//--- else if nos dá mais opções de escolha

let cor = "preto"

if(cor == "verde"){
console.log("Você adivinhou minha cor favorita")
} else if(cor == "amarelo"){
console.log("Também gosto dessa cor")
} else if(cor == "preto"){
console.log("Amo essa cor")
}else{
    console.log("Você não acertou a minha cor favorita")
}

//Operadores || e && 

let mes = "junho"

//SE o mes for dezembro OU janeiro OU junho
if(mes == "dezembro" || mes == "janeiro" || mes == "junho" || mes == "agosto" || mes == "maio"){
console.log(`Parabéns, o mês escolhido foi Dezembro , Janeiro ou Junho `)
} else {
    console.log("O mês escolhido não foi aprovado")
}

//---- && precisa que todas as informações estejam corretas

let a = "Jana"
let b = "Helen"

//SE a for igual a true E b for igual a false, faça isso.
if(a == "Jana" && b == "Hellen") {
    console.log("Ta tudo certinho")
} else {
    console.log("Resposta incorreta")
}