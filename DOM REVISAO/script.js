// DOM (modelo de objeto de documento) Ele é uma representação da estrutura do nosso código HTML, em formato hierarquico à partir de seus elementos. 

//Parece uma árvore genealógica 
//Permite que um documento HTML seja acessado pelo JS e outras linguagens. 

//CAPTURAR UM ELEMENTO ATRAVÉS DO DOM 

//querySelector: Ele nos permite capturar um elemento pelo nome da tag, id ou class. 

const primeiroTitulo = document.querySelector("h1")

function acao(){
    primeiroTitulo.style.color = "rgb(255,96,77)";
    primeiroTitulo.style.backgroundColor="yellow";
    primeiroTitulo.style.fontSize = "4rem";
    primeiroTitulo.style.fontStyle="italic";
    primeiroTitulo.style.fontWeight="800";
}
//acao() //ativando a função manualmente

//onclick: É um evento de clique, quando o usuário clicar, a função vai ser executada. Esses eventos são passando em tags, consigo utilizar em qualquer tag, mas é mais utilizada em button.

const tituloH2 = document.querySelector("h2")

function estilizandoH2(){
    tituloH2.style.color = "green";
    tituloH2.style.backgroundColor="orange";
    tituloH2.style.fontSize = "2.5rem";
    tituloH2.style.fontStyle="italic";
    tituloH2.style.fontWeight="700";
}

//estilizandoH2() //ativando a função manualmente

//querySelectorAll vai capturar os elementos e retornará uma array chaamda nodelist. 

const lista = document.querySelectorAll ("li")
console.log(lista)

lista[3].style.color="green"
lista[6].style.color = "red"



const imagem = document.querySelector("img")
console.log(imagem)

function mostrarImagem(){
    imagem.src="https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/09/hqdefault.jpg"
}

// mostrarImagem()  //ativando a função manualmente