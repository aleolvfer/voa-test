function resetInput(input) {
  input.addEventListener("focus", () => {
    input.style.webkitTextFillColor = "#222"
    input.placeholder = "seu e-mail";
  });
}

function emailJaCadastrado(input) {
  input.style.webkitTextFillColor = "#e8d52d";
  input.style.fontFamily = "Space Mono, nomoscape";
  input.value = "";
  input.placeholder = "e-mail já cadastrado ;)";
}

function emailCadastrado(input) {
  input.style.webkitTextFillColor = "#44BB44";
  input.style.fontFamily = "Space Mono, nomoscape";
  input.value = "";
  input.placeholder = "e-mail cadastrado!";
}

function emailInvalido(input) {
  input.style.webkitTextFillColor = "#dd0000";
  input.style.fontFamily = "Space Mono, nomoscape";
  input.value = "";
  input.placeholder = "e-mail inválido.";
}