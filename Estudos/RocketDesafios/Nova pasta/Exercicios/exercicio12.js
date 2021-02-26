let app = document.querySelector('body')
let conteudo = document.createElement('div')
let verde = document.createElement('button')
let vermelho = document.createElement('button')
let textoVerde = document.createTextNode('Verde')
let textoVermelho = document.createTextNode('Vermelho')

app.appendChild(conteudo)
conteudo.appendChild(verde)
conteudo.appendChild(vermelho)
verde.appendChild(textoVerde)
vermelho.appendChild(textoVermelho)

verde.setAttribute('onclick',"fverde()")
vermelho.setAttribute('onclick','fvermelho()')

verde.style.marginLeft = '550px'
verde.style.marginTop = '250px'



function fverde(){
    document.body.style.backgroundColor = "green"
}
function fvermelho(){
    document.body.style.backgroundColor = "red"
}

