let corpo = document.querySelector('body')
let conteudo = document.createElement('div')
let n1 = document.createElement('input')
let n2 = document.createElement('input')
let botao = document.createElement("button")
let tbotao = document.createTextNode("Somar")
let campo = document.createElement("div")

n1.setAttribute("type","number")
n2.setAttribute("type", 'number')
n1.setAttribute("placeholder","Informe o primeiro valor")
n2.setAttribute("placeholder","Informe o segundo valor")
n1.setAttribute("id", 'soma2')
n2.setAttribute("id", 'soma2')
botao.setAttribute("onclick","somar()")
botao.setAttribute("id", 'btn-soma')



corpo.appendChild(conteudo)
conteudo.appendChild(n1)
conteudo.appendChild(n2)
conteudo.appendChild(botao)
conteudo.appendChild(campo)
botao.appendChild(tbotao)

function somar(){
    if(n1.value != "" && n2.value != "" ){
        if(n1.value != "" || n2.value != ""){
        campo.innerHTML = parseInt(n1.value) + parseInt(n2.value)
        }
    }else{
        window.alert("Por favor preencha todos os campos.")
    }
}