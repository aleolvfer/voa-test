document.querySelector(".button").addEventListener("click", async (event) => {
  event.preventDefault();

  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BNS5DErDHfwWDoBSQ0EH7tFM02BNfh9hwX9H_Fhf2fYzc_aWwQhHWc3EYHvAqgo73TN0tsonLTH9TvEYCyxwZwM'

  })

  console.log(JSON.stringify(push));
});


/* 
setTimeout(() => {
  console.log("kkkkkk");

  if (!("Notification" in window)) {
    alert("Este browser não suporta notificações de Desktop");
  }
  else if (Notification.permission === "granted") {
    console.log("seráaa??")
    var notification = new Notification("Hi there!");
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        console.log("é foiiii??")
        var notification = new Notification("Hi there!");
      }
    });
  }
}, "5000"); */