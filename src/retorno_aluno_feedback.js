const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const id_retorno = urlParams.get("id_retorno");
const nome = urlParams.get("nome");

$.ajax({
  method: "GET",
  url: `http://localhost:3000/tipo_informacao/${id_retorno}`,

  datatype: "json",
  success: function (data) {
    $("#retorno_feedback").html(data.mensagem_professor)
    $("#feedback").html(data.mensagem)
    $("#bem_vindo").html(`Seja bem vindo, ${data.NOME_ALUNO}`)
  },
  error: function (xhr, status, error) {
    alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
    console.log(xhr, status, error);
  }
});

document.getElementById("hom").addEventListener("click", async function (event) {
  window.location.href = `./treino_dieta.html?id=${id}`;
})