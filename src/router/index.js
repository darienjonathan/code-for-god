import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Keluarga from "@/views/Keluarga.vue";
import KeluargaItem from "@/views/KeluargaItem.vue";
import Umum from "@/views/Umum.vue";
import UmumItem from "@/views/UmumItem.vue";
import Khotbah from "@/views/Khotbah.vue";
import KhotbahItem from "@/views/KhotbahItem.vue";
import Renungan from "@/views/Renungan.vue";
import RenunganItem from "@/views/RenunganItem.vue";
import DiyChristmas from "@/views/DiyChristmas.vue";
import Kingstone from "@/views/Kingstone.vue";
import SabdaMediaKit from "@/views/SabdaMediaKit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top
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
  },
  {
    path: "/khotbah",
    name: "Khotbah",
    component: Khotbah
  },
  {
    path: "/khotbah/:id",
    name: "KhotbahItem",
    component: KhotbahItem
  },
  {
    path: "/renungan",
    name: "Renungan",
    component: Renungan
  },
  {
    path: "/renungan/:id",
    name: "RenunganItem",
    component: RenunganItem
  },
  {
    path: "/kingstone",
    name: "Kingstone",
    component: Kingstone
  },
  {
    path: "/sabda-media-kit",
    name: "SabdaMediaKit",
    component: SabdaMediaKit
  },
  {
    path: "/diy-christmas",
    name: "DiyChristmas",
    component: DiyChristmas
  }
];

const router = new VueRouter({
  routes
});

export default router;
