import Vue from "vue";
import VueRouter from "vue-router";
import Keluarga from "@/views/Keluarga.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Keluarga",
    component: Keluarga
  },
  {
    path: "/keluarga",
    name: "Keluarga",
    component: Keluarga
  }
];

const router = new VueRouter({
  routes
});

export default router;
