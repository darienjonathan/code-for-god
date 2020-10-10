import Vue from "vue";
import VueRouter from "vue-router";
import Keluarga from "@/views/Keluarga.vue";
import KeluargaItem from "@/views/KeluargaItem.vue";

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
  },
  {
    path: "/keluarga/:id",
    name: "KeluargaItem",
    component: KeluargaItem
  }
];

const router = new VueRouter({
  routes
});

export default router;
