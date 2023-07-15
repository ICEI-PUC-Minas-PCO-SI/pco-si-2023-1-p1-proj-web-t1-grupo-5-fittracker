// Função para salvar os dados do treino e dieta
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log('id: ', id);
const id_professor = urlParams.get("id_treinador");

fetch(`https://json-server-fit-tracker.vercel.app/usuarios`, {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  }
}).then((res => {
  return res.json()
})).then((data) => {
  data.forEach(value => {
    if (value.codigo_treinador == null && value.id == id_professor) {
      $("#header_treinador").html("Seja bem vindo," + value.nome);
    }

  });
  return true;
});

// $.ajax({
//   method: "GET",
//   url: `https://json-server-fit-tracker.vercel.app/usuarios`,
//   success: function (data) {
//     data.forEach(value => {
//       if (value.codigo_treinador == null && value.id == id_professor) {
//         $("#header_treinador").html("Seja bem vindo," + value.nome);
//       }

//     });
//     return true;
//   },
//   error: function (xhr, status, error) {
//     alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
//     console.log(xhr, status, error);
//   }
// });

fetch(`https://json-server-fit-tracker.vercel.app/treino_dieta`, {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  }
}).then((res => {
  return res.json()
})).then((data) => {
  data.forEach(value => {
    if (value.id_aluno == id) {
      $("#treino").val(value.treino);
      $("#dieta").val(value.dieta);
    }

  });
  return true;
});

// $.ajax({
//   method: "GET",
//   url: `https://json-server-fit-tracker.vercel.app/treino_dieta`,
//   success: function (data) {
//     data.forEach(value => {
//       if (value.id_aluno == id) {
//         $("#treino").val(value.treino);
//         $("#dieta").val(value.dieta);
//       }

//     });
//     return true;
//   },
//   error: function (xhr, status, error) {
//     alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
//     console.log(xhr, status, error);
//   }
// });
// $.ajax({
//   method: "GET",
//   url: `https://json-server-fit-tracker.vercel.app/treino_dieta`,
//   success: function (data) {
//     data.forEach(value => {
//       if (value.id_aluno == id) {
//         $("#treino").val(value.treino);
//         $("#dieta").val(value.dieta);
//       }

//     });
//     return true;
//   },
//   error: function (xhr, status, error) {
//     alert("Erro ao conectar com o servidor. Por favor tente novamente mais tarde.");
//     console.log(xhr, status, error);
//   }
// });

function salvarDados() {
  var treino = document.getElementById("treino").value;
  var dieta = document.getElementById("dieta").value;
  var id_aluno = id;
  // Criar um objeto JSON com os dados
  var data = {
    treino: treino,
    dieta: dieta,
    id_aluno: id_aluno,
  };
  // Enviar uma requisição POST para salvar os dados no JSON Server
  fetch("https://json-server-fit-tracker.vercel.app/treino_dieta", {
    method: "POST",
    body: JSON.stringify({data}),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(function (response) {
      window.location.href = `./Principal_trainner.html?id=${id_professor}`;
      alert("Dieta e treino salvos com sucesso!");
  return true;
})
.catch(function (error) {
    console.log("erro")
});

  // $.ajax({
  //   method: "POST",
  //   url: "https://json-server-fit-tracker.vercel.app/treino_dieta",
  //   data: data,
  //   success: function (response) {
  //     window.location.href = `./Principal_trainner.html?id=${id_professor}`;
  //     alert("Dieta e treino salvos com sucesso!");

  //   },
  //   error: function (xhr, status, error) {
  //     console.log("Erro ao salvar os dados:", error);
  //   }
  // });
}
document.getElementById("hom").addEventListener("click", async function (event) {
  window.location.href = `./Principal_trainner.html?id=${id_professor}`;
})