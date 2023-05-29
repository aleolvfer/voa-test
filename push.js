var push = require('web-push');
//console.log(push.generateVAPIDKeys());


let vapidKeys = {
    publicKey: 'BNS5DErDHfwWDoBSQ0EH7tFM02BNfh9hwX9H_Fhf2fYzc_aWwQhHWc3EYHvAqgo73TN0tsonLTH9TvEYCyxwZwM',
    privateKey: 'Cj3sytTLw7ppsDj3PX6moBc7e3ouQ-eZTKvYJmLX3x8'
}

push.setVapidDetails('malito: alex.brendon@voa.ag', vapidKeys.publicKey, vapidKeys.privateKey );

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/ec27VsAwZCs:APA91bF5_D5iPCboBfMT4urpmRT8wQOU8bj2UHILCZ7QF6Th-PW5RT4peJDZEziOtpIZQ1W9JykDGkxTUa7S0OOYcFiUS8HPzb4Iu88_NxGzGDfWVG1qg0u29v_p8yDFhZSTqZxM-DzT",
    "expirationTime":null,
    "keys":{"p256dh":"BMGFOAQKzbWd5fPpl44WPeF9NCIqMJbA07J12V8GOQJVl2DIFvZmPF6mi3vRjeqyQHzlJnJ_WwRAoB_fB6ISekk",
    "auth":"ZgjBsRA1F0M8boBIoUme2g"
}};

push.sendNotification(sub, 'notificandoo??');
