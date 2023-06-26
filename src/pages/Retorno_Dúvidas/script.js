function salvarDadosRespTreinador() {
    var resposta = document.getElementById("resposta").value;
    // Armazenar valores usando localStorage
    localStorage.setItem("resposta", resposta);
  }