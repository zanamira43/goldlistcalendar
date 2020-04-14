import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBRYW86Aq1_ermTiDIgmhNU1pfpL4fMVNk",
  authDomain: "vue-english-list-calendar.firebaseapp.com",
  databaseURL: "https://vue-english-list-calendar.firebaseio.com",
  projectId: "vue-english-list-calendar",
  storageBucket: "vue-english-list-calendar.appspot.com",
  messagingSenderId: "140518862146",
  appId: "1:140518862146:web:3e102f6156ffcfa774acdb"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
