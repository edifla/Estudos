let corpo = document.querySelector('body')
let conteudo = document.createElement('div')
let valor = document.createElement('input')
let botao = document.createElement("button")
let tbotao = document.createTextNode("Verificar")

botao.setAttribute("onclick","verificar()")

corpo.appendChild(conteudo)
conteudo.appendChild(valor)
conteudo.appendChild(botao)
botao.appendChild(tbotao)

function verificar(){
    if(valor.value.length % 2 == 0){
        
        window.alert("par")
        
    }else{
        window.alert("impar.")
    }
}