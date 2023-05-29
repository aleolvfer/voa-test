

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