var push = require('web-push');
//console.log(push.generateVAPIDKeys());


let vapidKeys = {
    publicKey: 'BNS5DErDHfwWDoBSQ0EH7tFM02BNfh9hwX9H_Fhf2fYzc_aWwQhHWc3EYHvAqgo73TN0tsonLTH9TvEYCyxwZwM',
    privateKey: 'Cj3sytTLw7ppsDj3PX6moBc7e3ouQ-eZTKvYJmLX3x8'
}

push.setVapidDetails('malito: alex.brendon@voa.ag', vapidKeys.publicKey, vapidKeys.privateKey );

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/cH-SJmYDy_A:APA91bEKqWpkW3X3N7_s2789wdyBkEMCS8XaVo1evKF8SeXW2SQ8o5ieopsRSl-1j-abKtYcEgCxh6dGZ5bKBzku5Z1_7pMOUbcEb75OUI2tHR-V7vCn4qOB0eB-6_fYx-obhakTMy8h",
    "expirationTime":null,
    "keys":{
        "p256dh":"BP0X1HuQgHRbBV5dgY2MYC4SI442VZBCx5tIEAx2f9-9zqeTC12Bs3hsiVO371yBKXKrXvL1YJZT6OPyM4zNaP8",
        "auth":"f_yelArqE1h61tH5bzqO8w"
    }
};

push.sendNotification(sub, 'notificandoo??');
