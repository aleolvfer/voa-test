document.querySelector(".button").addEventListener("click", async (event) => {
  event.preventDefault();

  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BIwQZIPjGIB3T96jLiBsmstcPfKxW2c7Gi4batqPe7-gtfEVHXQ0omFNFOg3bbHOgGgG2t7O7JFv-fOmLUpHQmE'

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