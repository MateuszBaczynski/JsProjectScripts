import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Scripts from "@/components/Scripts.vue";
import Other from "@/components/Other.vue";
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
      path: "/Scripts",
      name: "Scripts",
      component: Scripts
    },
    {
      path: "/Other",
      name: "Other",
      component: Other
    }
  ]
});

export default router;
