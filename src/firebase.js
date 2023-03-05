import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyCMdW6d1foBPFLqjBTSSE8OYzOK_Bt9gJ4",
  authDomain: "smart-energy-web.firebaseapp.com",
  projectId: "smart-energy-web",
  storageBucket: "smart-energy-web.appspot.com",
  messagingSenderId: "926644248647",
  appId: "1:926644248647:web:2af1dcf2538eeb1e581162",
  measurementId: "G-K2HGEGT19L"
};


const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BEz9Z5wX9yetfaMb8HEpUdu0L6X7n-uwb4k0RJy2kT7lfGmz9K6BDsJmYIeLTbozQXlMGJE5Np3g0LufMTS3_zQ'}).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken)
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});