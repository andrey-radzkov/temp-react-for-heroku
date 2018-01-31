importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
//tODO: import from local

firebase.initializeApp({
  'messagingSenderId': '966501688821'
});
const messaging = firebase.messaging();


