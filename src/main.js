import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./utils/config";
firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.use(VueSweetalert2);
