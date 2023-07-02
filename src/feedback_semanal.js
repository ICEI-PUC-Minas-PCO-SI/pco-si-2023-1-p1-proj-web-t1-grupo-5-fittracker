const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const nome = urlParams.get("nome");
const id_treinador = urlParams.get("id_treinador");

var NOME_ALUNO = "";
$.ajax({
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
  $.ajax({
    method: "POST",
    url: `https://json-server-fit-tracker.vercel.app/tipo_informacao`,
    data: {
      NOME_ALUNO: NOME_ALUNO,
      ID_ALUNO: id,
      TP_INFORMACAO: 2,
      STATUS: "P",
      assunto: "",
      mensagem: $("#mensagem").val(),
      mensagem_professor: "",
      id_treinador: id_treinador
    },
    datatype: "json",
    success: function (data) {
      window.location.href = `./treino_dieta.html?id=${id}`;
      alert("Feedback enviado com sucesso.");
      return true;
    },
    error: function (xhr, status, error) {
      alert(
        "Erro ao conectar com o servidor. Por favor tente novamente mais tarde."
      );
      console.log(xhr, status, error);
    },
  });
}

document.getElementById("hom").addEventListener("click", async function (event) {
  window.location.href = `./treino_dieta.html?id=${id}`;
})