function salvarDados() {
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Armazenar valores usando localStorage
    localStorage.setItem("assunto", assunto);
    localStorage.setItem("mensagem", mensagem);
  }
  