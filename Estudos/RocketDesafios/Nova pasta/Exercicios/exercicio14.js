let corpo = document.querySelector('body')
let div1 = document.createElement('div')

corpo.appendChild(div1)

div1.setAttribute('id','resultado')

let conteudo = document.querySelector('#resultado')
conteudo.onload = exibir()

function exibir(){
    conteudo.innerHTML ="Este texto foi inserido com javascript"
    
}