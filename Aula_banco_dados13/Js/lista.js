function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function criaLinha(element){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colEmail = document.createElement("td")
    let colSenha = document.createElement("td")
    colId.innerHTML = element.id_login_pk
    colEmail.innerHTML = element.email
    colSenha.innerHTML = element.senha
    linha.appendChild(colId)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)
    return linha


}

function main(){
    let dados = fazGet("http://localhost:3000/login")
    let table = document.getElementById('table')
    let usuarios = JSON.parse(dados)
    usuarios.forEach(element => {
        let linha = criaLinha(element)
        table.appendChild(linha)
    });
}

main()