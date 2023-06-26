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

  fetch(`http://localhost:3000/alunos?senha=${password}&login=${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res => {
    return res.json()
  })).then((res) => {
    if (res.length > 0) {
      alert("logado ")
      document.getElementById("user").value = "";
      document.getElementById("senha").value = "";

      window.location.href = "../Principal_trainner/index.html";

    } else {
      alert("Usuário ou senha incorretos")
    }
    console.log(res);
  })
});