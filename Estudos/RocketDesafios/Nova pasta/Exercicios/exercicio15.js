let corpo = document.querySelector('body')
let div1 = document.createElement('div')
let botao = document.createElement('button')
let tbotao = document.createTextNode("Click")

corpo.appendChild(div1)
botao.appendChild(tbotao)
div1.appendChild(botao)

div1.setAttribute('id','resultado')
let conteudo = document.querySelector('#resultado')
botao.setAttribute('onclick','exibir()')

function exibir(){
    conteudo.innerHTML ="Este texto foi inserido com javascript"
}