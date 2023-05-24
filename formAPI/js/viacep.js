function limparFormulario(){
document.getElementById('rua').value ="";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('uf').value = "";
        document.getElementById('ibge').value = "";
}

function minhafuncao(conteudo){
    if(!('erro' in conteudo)){  //se não tiver erro em conteudo entra aqui cada campo
        //rua bairro cidade uf ibge id das nossas input // pegando o campo da api 
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
        document.getElementById('ibge').value = conteudo.ibge;
    }else{
        alert("O CEP digitado não existe na base de dados.");
        limparFormulario();
    }
}

function pesquisacep(valor){
    //regex ou expressão regular (Rubular)
    let cep = valor.replace(/\D/g,'');   //se encontrar qualquer coisa que não seja digito substitua por nada
    if(cep != ""){  //colocando o cep dentro se cep for diferente de vazio
        let valida = /^[0-9]{8}$/;  //validando só cep de 0
        if(valida.test(cep)){
            //alert("cep valido" + cep);
            let script = document.createElement('script');
            script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=minhafuncao"; //get colocando o cep que o usuario colocou  call bakc é o cara qeu devolve a resposta
            document.body.appendChild(script); //colocando na nossa pagina htlm


        }else{
            limparFormulario();
            alert("O CEP informado não possui 8 digitos numéricos");
        }
    }else{
        alert('O CEP não pode ser vazio');
        limparFormulario();
    }

}