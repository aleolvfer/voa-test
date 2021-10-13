document.querySelector("button").addEventListener("click", async event => {
  event.preventDefault();

  let input = document.getElementById("email");
  let email = document.getElementById("email").value;

  let url = `https://voaremos-services.com.br/api_vt/test/contact/${email}`;
  let response = await fetch(url);
  let emailQuery = await response.json();
  console.log(emailQuery.status);


  let re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailQuery.status == 200) {
    emailJaCadastrado(input);
    resetInput(input);
  } else if (re.test(email)) {
    emailCadastrado(input)
    resetInput(input);
  } else {
    emailInvalido(input)
    resetInput(input);
  }

});
