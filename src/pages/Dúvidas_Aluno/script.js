const urlParams = new URLSearchParams(window.location.search);     
const id = urlParams.get("id");
  
function salvarDados() {
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;
  var nome = ''; 

 
  fetch("http://localhost:3000/usuarios", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res => {
        return res.json()
    })).then((res) => {
        res.forEach(element => {
          if (element.id == id) {
            nome = element.nome
          }
        });
  })

  var dados = {
    NOME_ALUNO: nome,
    TP_INFORMACAO: 1,
    STATUS: 'P',
    assunto: assunto,
    mensagem: mensagem
};

  fetch("http://localhost:3000/tipo_informacao", {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Erro ao cadastrar dúvida.");
    }
})
.then(function (resultado) {
    alert("Dúvida cadastrada com sucesso.");
})
.catch(function (error) {
    console.log("erro")
});
}







// VOCE VAI TER ID DO ALUNO PELA URL    VOCE VAI CRIAR UM JSON QUE VAI TER O TIPO DA INFORMAÇAO , O STATUS E O ALUNO
// TP_INFORMAÇAO
// NOME_ALUNO
// STATUS
// tipo_informacao