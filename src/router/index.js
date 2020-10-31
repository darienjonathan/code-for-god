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
import Bioskop from "@/views/Bioskop.vue";
import BioskopItem from "@/views/BioskopItem.vue";
import Games from "@/views/Games.vue";
import GamesItem from "@/views/GamesItem.vue";
import Karaoke from "@/views/Karaoke.vue";
import KaraokeItem from "@/views/KaraokeItem.vue";
import Liturgi from "@/views/Liturgi.vue";
import LiturgiItem from "@/views/LiturgiItem.vue";

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
  },
  {
    path: "/bioskop",
    name: "Bioskop",
    component: Bioskop
  },
  {
    path: "/bioskop/:id",
    name: "BioskopItem",
    component: BioskopItem
  },
  {
    path: "/karaoke",
    name: "Karaoke",
    component: Karaoke
  },
  {
    path: "/karaoke/:id",
    name: "KaraokeItem",
    component: KaraokeItem
  },
  {
    path: "/games",
    name: "Games",
    component: Games
  },
  {
    path: "/games/:id",
    name: "GamesItem",
    component: GamesItem
  },
  {
    path: "/liturgi",
    name: "Liturgi",
    component: Liturgi
  },
  {
    path: "/liturgi/:id",
    name: "LiturgiItem",
    component: LiturgiItem
  }
];

const router = new VueRouter({
  routes
});

export default router;
