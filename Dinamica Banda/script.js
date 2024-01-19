let banda = ["Taylor", "Rihanna", "Adele", "Madonna", "Shakira"]

console.log(banda.length) //saber a quantidade de itens que tem na array

//saber o index de um item da array
let resultadoPosicao = banda.indexOf("Shakira")
console.log(resultadoPosicao)



//SPLICE - REMOVE, ADICIONA OU SUBSTITUI UM ELEMENTO DA ARRAY. 

//removendo
//1 índice, 4 é a quantidade
 banda.splice(1,4)
 console.log(banda)

//adicionar 

banda.splice(1,3,"Kesha", "Witney", "Britney")
console.log(banda)

//    0         1        2  3
//[ 'Taylor', 'Kesha', 'Witney', 'Britney' ]

banda.splice(4,2,"Demi", "Miley")
console.log(banda)

//substitui
//à partir do índice 1, substitua 2 valores - 'Kesha', 'Witney' pela 'Mariah', 'Katty'
banda.splice(1,2,"Mariah", "Katty")
console.log(banda)