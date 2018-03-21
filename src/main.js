import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vue2TouchEvents from "vue2-touch-events";
import VueConfetti from "vue-confetti";

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents, { disableClick: true, touchClass: "is-touched" });
Vue.use(VueConfetti);

Vue.filter("capitalize", str => str[0].toUpperCase() + str.slice(1));

new Vue({
  router,
  store,
  async beforeCreate() {
    const res = await fetch("http://countrymatcher.jonaskuske.com/get_category.php");
    const arr = await res.json();
    let counter = 0, currentVal = '';
    const obj = {};
    arr.forEach((val, key) => {
      if (counter === 0) {
        obj[val] = {};
        obj[val].title = val;
        obj[val].selection = undefined;
        currentVal = val;
      }
      if (counter === 1) obj[currentVal].bulletpoints = val;
      if (counter === 2) {
        obj[currentVal].image = val; counter = -1;
      }
      counter++;
    });
    store.commit("updateUserSelectionOptions", obj);
  },
  render: h => h(App)
}).$mount("#app");
