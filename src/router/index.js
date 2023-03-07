import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Scripts from "@/components/Scripts.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "Scripts",
      component: Scripts
    }
  ]
});

export default router;
