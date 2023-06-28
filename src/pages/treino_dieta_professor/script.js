// Função para salvar os dados do treino e dieta
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log('id: ', id);
const id_professor = urlParams.get("id_professor");
console.log('id_professor: ', id_professor);

$.ajax({
  method: "GET",
  url: `http://localhost:3000/usuarios`,
  success: function (data) {
    data.forEach(value => {
      if (value.codigo_treinador == null && value.id == id_professor) {
        $("#header_treinador").html("Seja bem vindo," + value.nome);
      }

    });
    return true;
  },
  error: function (xhr, status, error) {
    alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
    console.log(xhr, status, error);
  }
});

function salvarDados() {
  var treino = document.getElementById("treino").value;
  var dieta = document.getElementById("dieta").value;

  // Criar um objeto JSON com os dados
  var data = {
    treino: treino,
    dieta: dieta
  };
  console.log("aq");
  // Enviar uma requisição POST para salvar os dados no JSON Server
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/treino_dieta",
    data: data,
    success: function (response) {
      window.location.href = `../Principal_trainner/index.html?id=${id_professor}`;
      alert("Dados salvos com sucesso!");

    },
    error: function (xhr, status, error) {
      console.log("Erro ao salvar os dados:", error);
    }
  });
}