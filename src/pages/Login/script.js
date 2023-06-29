document.getElementById("botaoLogin").addEventListener("click", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos
  var username = document.getElementById("user").value;
  var password = document.getElementById("senha").value;

  // Validação dos campos (opcional)
  if (!username || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  fetch(`http://localhost:3000/usuarios?senha=${password}&login=${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res => {
    return res.json()
  })).then((res) => {
    if (res.length > 0) {
      document.getElementById("user").value = "";
      document.getElementById("senha").value = "";
      console.log(res[0]);
      if (res[0].codigo_treinador == null) {
        window.location.href = `../Principal_trainner/index.html?id=${res[0].id}`;
      } else {
        window.location.href = `../treino_dieta/index.html?id=${res[0].id}`;
      }
    } else {
      alert("Usuário ou senha incorretos")
    }
    console.log(res);
  })
});