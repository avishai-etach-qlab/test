// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: "AIzaSyAjWIJe9AaL6fDZVn9tRajF-BUexEPFZyA",
//   authDomain: "react-notif-40228.firebaseapp.com",
//   projectId: "react-notif-40228",
//   storageBucket: "react-notif-40228.appspot.com",
//   messagingSenderId: "790644971731",
//   appId: "1:790644971731:web:dc0c5d007d2b961af3dc26"
// };

var firebaseConfig = {
  apiKey: "AIzaSyCMdW6d1foBPFLqjBTSSE8OYzOK_Bt9gJ4",
  authDomain: "smart-energy-web.firebaseapp.com",
  projectId: "smart-energy-web",
  storageBucket: "smart-energy-web.appspot.com",
  messagingSenderId: "926644248647",
  appId: "1:926644248647:web:2af1dcf2538eeb1e581162",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
