import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "animate.css";
import Wow from "wow.js";
import "./assets/css/bootstrap.min.css";
import "./assets/js/wow.min.js";
import "./sass/main.scss";

const wow = new Wow();
wow.init();

Vue.config.productionTip = false;

export const EventBus = new Vue();

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
