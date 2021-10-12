document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.getElementById("email");
  let email = document.getElementById("email").value;

  input.addEventListener("click", () => {
    input.style.webkitTextFillColor = "#DDD";
    input.value = "";
  });

  var re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (re.test(email)) {
    input.style.webkitTextFillColor = "#44ec44";
    input.value = "Email cadastrado!";
  } else {
    input.style.webkitTextFillColor = "#dd0000";
    input.value = "Email inválido.";
  }
});
