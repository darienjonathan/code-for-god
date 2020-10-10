import Vue from "vue";
import VueRouter from "vue-router";
import Keluarga from "@/views/Keluarga.vue";
import KeluargaItem from "@/views/KeluargaItem.vue";
import Umum from "@/views/Umum.vue";
import UmumItem from "@/views/UmumItem.vue";

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
  },
  {
    path: "/umum",
    name: "Umum",
    component: Umum
  },
  {
    path: "/umum/:id",
    name: "UmumItem",
    component: UmumItem
  }
];

const router = new VueRouter({
  routes
});

export default router;
