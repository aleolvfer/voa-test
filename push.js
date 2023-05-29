var push = require('web-push');
//console.log(push.generateVAPIDKeys());

let vapidKeys = {
    publicKey: 'BNS5DErDHfwWDoBSQ0EH7tFM02BNfh9hwX9H_Fhf2fYzc_aWwQhHWc3EYHvAqgo73TN0tsonLTH9TvEYCyxwZwM',
    privateKey: 'Cj3sytTLw7ppsDj3PX6moBc7e3ouQ-eZTKvYJmLX3x8'
}

push.setVapidDetails('malito: alex.brendon@voa.ag', vapidKeys.publicKey, vapidKeys.privateKey );

let sub = {};

push.sendNotification(sub, 'notificandoo??');
