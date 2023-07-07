const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const id_retorno = urlParams.get("id_retorno");
const nome = urlParams.get("nome");


fetch(`https://json-server-fit-tracker.vercel.app/tipo_informacao/${id_retorno}`, {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  }
}).then((res => {
  return res.json()
})).then((data) => {
  $("#retorno_duvida").html(data.mensagem_professor)
  $("#duvida").html(data.mensagem)
  $("#bem_vindo").html(`Seja bem vindo, ${data.NOME_ALUNO}`)
});

// $.ajax({
//   method: "GET",
//   url: `https://json-server-fit-tracker.vercel.app/tipo_informacao/${id_retorno}`,

//   datatype: "json",
//   success: function (data) {
//     $("#retorno_duvida").html(data.mensagem_professor)
//     $("#duvida").html(data.mensagem)
//     $("#bem_vindo").html(`Seja bem vindo, ${data.NOME_ALUNO}`)
//   },
//   error: function (xhr, status, error) {
//     alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
//     console.log(xhr, status, error);
//   }

// });
document.getElementById("hom").addEventListener("click", async function (event) {
  window.location.href = `./treino_dieta.html?id=${id}`;
})