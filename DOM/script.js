//DOM - DOCUMENT OBJECT MODEL (MODELO DE OBJETO DE DOCUMENTO)

//HTML É A ESTRUTURA DA CASA, O CSS É A DECORAÇÃO, OS JS É A ELETRICIDADE E O DOM É A PLANTA DA CASA. CONSIGO VER TUDO QUE ESTÁ ACONTECENDO. (POSSO LER ELEMENTOS ATRAVÉS DE TAGS, ID E CLASS) CRIAR NOVOS ELEMENTOS; EXCLUIR ELEMENTOS; MODIFICAR ELEMENTOS/ESTILOS

//documento.querySelector vai capturar um elemento pelo nome da tag, id ou class. 


let cabecalho = document.querySelector("header")

function mudarHeader(){
cabecalho.style.backgroundColor = "purple"
cabecalho.style.color = "white"
}

mudarHeader()

//---- 

let primeiroTitulo = document.querySelector("h1")

function acao(){
primeiroTitulo.style.transition = "10s"
primeiroTitulo.style.transform = "rotate(360deg)"
}

acao()