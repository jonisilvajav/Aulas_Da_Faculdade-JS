function calcularMedia() {
    const nomeAluno = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    
    
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("nome-aluno").innerHTML = nomeAluno;
    
    document.getElementById("media").innerHTML = media.toFixed(1);
    
    
    if (media >= 6.0) {
      document.getElementById("situacao").innerHTML = "Aprovado";
      document.getElementById("situacao").className = "aprovado";
    } else if (media <= 2.0) {
      document.getElementById("situacao").innerHTML = "Reprovado";
      document.getElementById("situacao").className = "reprovado";
    } else {
      document.getElementById("situacao").innerHTML = "Recuperação";
      document.getElementById("situacao").className = "recuperação";
    }
  }