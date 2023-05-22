document.querySelector(".button").addEventListener("click", async event => {
  event.preventDefault();

  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }

  else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there!");
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }


  /* let input = document.getElementById("email");
  let email = document.getElementById("email").value;

  let url = `https://voaremos-services.com.br/api_vt/test/contact/${email.toLowerCase()}`;
  let response = await fetch(url);
  let emailQuery = await response.json();

  let re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailQuery.status == 200) {
    emailJaCadastrado(input);

  } else if (re.test(email)) {
    emailCadastrado(input)

  } else {
    emailInvalido(input)
  } */

});
