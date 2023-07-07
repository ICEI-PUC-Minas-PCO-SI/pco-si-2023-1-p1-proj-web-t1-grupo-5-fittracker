const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const nome = urlParams.get("nome");
const id_treinador = urlParams.get("id_treinador");

var NOME_ALUNO = "";

fetch({
  method: "GET",
  url: `https://json-server-fit-tracker.vercel.app/usuarios`,
  success: function (data) {
    data.forEach((value) => {
      if (value.id == id) {
        $("#bem_vindo").html("Seja bem vindo,  " + value.nome);
        $("#cod_prof").html(value.id);
        NOME_ALUNO = value.nome;
      }
    });
    return true;
  },
  error: function (xhr, status, error) {
    alert(
      "Erro ao conectar com o servidor. Por favor tente novamente mais tarde."
    );
    console.log(xhr, status, error);
  },
});

function setFedback() {
     fetch("https://json-server-fit-tracker.vercel.app/tipo_informacao", {
      method: "POST",
      body: JSON.stringify({
        NOME_ALUNO: NOME_ALUNO,
        ID_ALUNO: id,
        TP_INFORMACAO: 2,
        STATUS: "P",
        assunto: "",
        mensagem: $("#mensagem").val(),
        mensagem_professor: "",
        id_treinador: id_treinador
      }),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(function (response) {
    window.location.href = `./treino_dieta.html?id=${id}`;
    alert("Feedback enviado com sucesso.");
    return true;
  })
  .catch(function (error) {
      console.log("erro")
  });
}

document.getElementById("hom").addEventListener("click", async function (event) {
  window.location.href = `./treino_dieta.html?id=${id}`;
})