import Vue from "vue";
import Router from "vue-router";
import Splash from "./views/Splash.vue";
import Tutorial from "./views/Tutorial.vue";
import Selection from "./views/Selection.vue";
import Results from "./views/Results.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "splash",
      component: Splash
    },
    {
      path: "/tutorial",
      name: "tutorial",
      component: Tutorial
    },
    {
      path: "/selection",
      name: "selection",
      component: Selection
    },
    {
      path: "/results",
      name: "results",
      component: Results
    }
  ]
});
