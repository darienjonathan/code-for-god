import Vue from "vue";
import Vuex from "vuex";
import khotbah from "@/store/khotbah";
import renungan from "@/store/renungan";
import keluarga from "@/store/keluarga";
import umum from "@/store/umum";
import kingstone from "@/store/kingstone";
import sabdaMediaKit from "@/store/sabdaMediaKit";
import diyChristmas from "@/store/diyChristmas";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    keluarga: {
      namespaced: true,
      ...keluarga
    },
    umum: {
      namespaced: true,
      ...umum
    },
    khotbah: {
      namespaced: true,
      ...khotbah
    },
    renungan: {
      namespaced: true,
      ...renungan
    },
    kingstone: {
      namespaced: true,
      ...kingstone
    },
    sabdaMediaKit: {
      namespaced: true,
      ...sabdaMediaKit
    },
    diyChristmas: {
      namespaced: true,
      ...diyChristmas
    }
  }
});
